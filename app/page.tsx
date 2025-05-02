'use client';

import Header from '@/components/Header';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="p-10 flex flex-col items-center text-2xl underline gap-4">
        <Link
          href={`#`}
          onClick={() => {
            axios.get(`/api/race`).then((res) => {
              if (res.data.race?.id) {
                router.push(`/bet?raceId=${res.data.race?.id}`);
              } else {
                alert('No active bet');
              }
            });
          }}
        >
          Bet
        </Link>
        <Link href={`/auction`}>Auction</Link>
        <Link href={`/referral`}>Referral</Link>
        <Link href={`/deposit`}>Deposit</Link>
      </main>
    </>
  );
}
