'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import axios from 'axios';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthPage() {
  const { publicKey } = useWallet();
  const searchParams = useSearchParams();
  const referralCode = searchParams.get('referralCode') || undefined;
  const router = useRouter();

  useEffect(() => {
    if (!publicKey) {
      console.error('Wallet not connected or connection unavailable');
      return;
    }

    try {
      axios
        .post('/api/auth', {
          wallet: publicKey?.toString(),
          referralCode,
        })
        .then(() => {
          router.push('/');
        });
    } catch (error) {
      console.error('Failed to retrieve account info:', error);
    }
  }, [publicKey, referralCode, router]);

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-6">Connect Wallet to Continue</h1>
      <WalletMultiButton />
    </div>
  );
}
