'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';

export default function ReferralPage() {
  const [referrals, setReferrals] = useState<any>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios.get(`/api/referrals`).then((res) => setReferrals(res.data.referrals));
    axios.get(`/api/user`).then((res) => setUser(res.data.user));
  }, []);

  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-2xl font-bold text-center mb-4">
          Referral Program
        </h1>

        <div className="p-4 rounded shadow max-w-md mx-auto mt-4">
          <p className="font-bold">Your referral link:</p>
          <code className="break-all underline">
            {user?.referralCode
              ? `${window.location.origin}/auth/?referralCode=${user.referralCode}`
              : 'Loading...'}
          </code>
          <br />
          <p className="mt-2">
            <span className="font-bold">Referred Users</span>:{' '}
            {!referrals.length && 'N/A'}
          </p>
          {referrals.map((referral: any, index: number) => (
            <div key={index} className="p-2 italic">
              {referral.wallet}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
