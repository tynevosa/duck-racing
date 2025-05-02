/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Header from '@/components/Header';
import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';

export default function ReferralPage() {
  const { data: auctions } = useSWR(`/api/auction`, async (url) => {
    const res = await axios.get(url);
    return res.data.auctions;
  });

  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-2xl font-bold text-center mb-4">Active Auctions</h1>

        <div className="p-4 rounded shadow max-w-md mx-auto mt-4 flex flex-col gap-4">
          {auctions?.length ? (
            auctions?.map((auction: any, index: number) => (
              <Link
                key={index}
                href={`/auction/${auction.id}`}
                className="flex flex-col gap-4 rounded border border-white shadow p-4 hover:bg-white/20 transition-all duration-200"
              >
                <p>
                  <span className="font-bold">Started At</span>:{' '}
                  {new Date(auction.createdAt).toLocaleString()}
                </p>
                <p>
                  <span className="font-bold">Ends At</span>:{' '}
                  {new Date(auction.expiredAt).toLocaleString()}
                </p>
                <p>
                  <span className="font-bold">Duck Name</span>:{' '}
                  {auction.duck.name}
                </p>
                <p>
                  <span className="font-bold">Current Bid</span>:{' '}
                  {auction.amount}
                </p>
                <p>
                  <span className="font-bold">Current Bidder</span>:{' '}
                  {auction.user ? auction.user.wallet : 'N/A'}
                </p>
                <p>
                  <span className="font-bold">Suggested Name</span>:{' '}
                  {auction.newName}
                </p>
              </Link>
            ))
          ) : (
            <div className="text-center">No active auctions</div>
          )}
        </div>
      </main>
    </>
  );
}
