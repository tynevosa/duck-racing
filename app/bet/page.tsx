/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Header from '@/components/Header';
import { useWallet } from '@solana/wallet-adapter-react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

export default function BettingPage() {
  const searchParams = useSearchParams();
  const raceId = searchParams.get('raceId') || undefined;
  const { publicKey } = useWallet();
  const wallet = publicKey?.toBase58() || '';

  const { data: raceRes, mutate: mutateRace } = useSWR(
    `/api/race?id=${raceId}`,
    (url) => axios.get(url).then((res) => res.data)
  );
  const { race, remainingTime } = raceRes || {};
  const { data: ducks } = useSWR(`/api/duck`, async (url) => {
    const res = await axios.get(url);
    return res.data.ducks;
  });
  const { data: bets, mutate: mutateBets } = useSWR(
    `/api/bet/${raceId}`,
    async (url) => {
      const res = await axios.get(url);
      return res.data.bets;
    }
  );
  const amountRef = useRef<HTMLInputElement>(null);
  const [duckId, setDuckId] = useState('');
  const [betType, setBetType] = useState('');

  const handleBet = async () => {
    if (timeLeft <= 0) return alert('Betting is closed!');
    if (!wallet) return alert('Connect your wallet first!');
    if (!amountRef.current) return;
    const amount = Number(amountRef.current.value);
    if (amount && duckId && betType) {
      axios
        .post(`/api/bet/${raceId}`, {
          duckId,
          amount,
          betType,
        })
        .then(async () => {
          // Refetch bets
          await mutateBets();
        })
        .catch((err) => {
          alert(err.response?.data?.message);
        });
    } else {
      alert('Please enter a valid amount!');
    }
  };

  useEffect(() => {
    if (remainingTime > 0) setTimeLeft(parseInt(remainingTime));
  }, [remainingTime]);

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) {
      mutateRace();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mutateRace, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <Header />
      <main className="p-10">
        <div className="flex md:flex-row flex-col justify-center gap-4">
          <div className="aspect-video w-full max-w-4xl">
            <iframe
              className="w-full h-full"
              src={race?.liveStream}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <div className="p-4 max-w-md flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Place Your Bet</h2>
              <span>
                {timeLeft < 0
                  ? 'Endded'
                  : `End in: ${formatTime(Math.floor(timeLeft / 1000))}`}
              </span>
            </div>
            <select
              onChange={(e) => setDuckId(e.target.value)}
              value={duckId}
              id="duck"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={''} disabled>
                Select duck
              </option>
              {ducks?.map((duck: any) => (
                <option key={duck.name} value={duck.id}>
                  {duck.name}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => setBetType(e.target.value)}
              value={betType}
              id="duck"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={''} disabled>
                Select bet type
              </option>
              <option value="Win">Win</option>
              <option value="Place">Place</option>
              <option value="Show">Show</option>
            </select>
            <input
              type="number"
              id="number-input"
              min="0"
              ref={amountRef}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount to deposit"
              required
            />
            <button className="btn" onClick={handleBet}>
              Bet
            </button>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Current Bets</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                  <thead className="bg-gray-900">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase">
                        Type
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase">
                        Amount
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase">
                        Duck
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase">
                        Win/Loss
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {bets?.map((bet: any) => (
                      <tr key={bet.id} className="hover:bg-gray-700">
                        <td className="px-4 py-2 text-sm text-gray-300">
                          {bet.betType}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-300">
                          {bet.amount.toFixed(2)} SOL
                        </td>
                        <td
                          className={`px-4 py-2 text-sm text-gray-300 ${
                            bet.duck?.color === 'Red'
                              ? 'text-red-400'
                              : bet.duck?.color === 'Blue'
                              ? 'text-blue-400'
                              : 'text-yellow-400'
                          }`}
                        >
                          {bet.duck?.name || 'Unknown'}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-300 font-bold">
                          {timeLeft > 0
                            ? 'Pending'
                            : race.result
                                ?.slice(
                                  0,
                                  betType === 'Win'
                                    ? 1
                                    : betType === 'Place'
                                    ? 2
                                    : 3
                                )
                                .includes(bet.duckId)
                            ? '✅Win'
                            : '❌Loss'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
