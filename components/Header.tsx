'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Header() {
  const { publicKey } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!publicKey) {
      document.cookie =
        'wallet=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      router.push('/');
    }
  }, [publicKey, router]);

  return (
    <header className="sticky inset-0 p-8 flex justify-around backdrop-blur-2xl">
      <Link href={`/`} className="text-3xl font-bold text-center mb-4">
        Duck Racing
      </Link>
      <WalletMultiButton />
    </header>
  );
}
