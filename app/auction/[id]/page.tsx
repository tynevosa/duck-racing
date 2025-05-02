'use client';

import Header from '@/components/Header';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useRef } from 'react';
import useSWR from 'swr';

export default function Page() {
  const params = useParams();
  const { id: auctionId } = params;
  const { data: auction, mutate: mutateAuction } = useSWR(
    `/api/auction?id=${auctionId}`,
    async (url) => {
      const res = await axios.get(url);
      return res.data.auctions[0];
    }
  );
  const amountRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleBid = async () => {
    if (!amountRef.current?.value || !nameRef.current?.value) {
      alert('Please enter a valid amount and name!');
    } else {
      axios
        .post(`/api/auction/${auctionId}`, {
          auctionId: auctionId,
          amount: parseFloat(amountRef.current?.value),
          suggestedName: nameRef.current?.value,
        })
        .then(() => {
          alert('Bid successful!');
          mutateAuction();
        })
        .catch((err) => {
          console.error('Error placing bid:', err);
          alert('Bid failed!\nReason: ' + err.response?.data?.message);
        });
    }
  };

  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-2xl font-bold text-center mb-4">Bid</h1>

        <div className="p-4 rounded shadow max-w-md mx-auto mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-4 rounded border border-white shadow p-4">
            <p>
              <span className="font-bold">Started At</span>:{' '}
              {new Date(auction?.createdAt).toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Ends At</span>:{' '}
              {new Date(auction?.expiredAt).toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Duck Name</span>: {auction?.duck.name}
            </p>
            <p>
              <span className="font-bold">Current Bid</span>: {auction?.amount} $DUCK
            </p>
            <p>
              <span className="font-bold">Current Bidder</span>:{' '}
              {auction?.user ? auction?.user.wallet : 'N/A'}
            </p>
            <p>
              <span className="font-bold">Suggested Name</span>:{' '}
              {auction?.newName}
            </p>
          </div>
          <div className="flex flex-col gap-4">
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
            <input
              type="text"
              id="name-input"
              ref={nameRef}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name to change"
              required
            />
            <button className="btn" onClick={handleBid}>
              Bid
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
