'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import { WalletSendTransactionError } from '@solana/wallet-adapter-base';

export default function ReferralPage() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [user, setUser] = useState<any>(null);
  const [loading, startTransition] = useTransition();
  const amountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios.get(`/api/user`).then((res) => setUser(res.data.user));
  }, []);

  const sendSol = async (amount: number) => {
    if (!publicKey) {
      console.error('Wallet not connected');
      return;
    }

    const recipientPubKey = new PublicKey(
      'BGGHChaP2reZNLv38tm1uAqVMYzyDtJfJJWemGkmpsrD'
    );

    const transaction = new Transaction();
    const sendSolInstruction = SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: recipientPubKey,
      lamports: amount * LAMPORTS_PER_SOL,
    });

    transaction.add(sendSolInstruction);

    return sendTransaction(transaction, connection);
  };

  const handleDeposit = async () => {
    if (!amountRef.current) return;
    const amount = Number(amountRef.current.value);
    if (amount && publicKey) {
      try {
        startTransition(async () => {
          // // Connect to Solana network
          // const connection = new Connection(
          //   process.env.NEXT_PUBLIC_SOLANA_RPC_URL ||
          //     'https://api.devnet.solana.com'
          // );

          // // Create transaction
          // const transaction = new Transaction().add(
          //   SystemProgram.transfer({
          //     fromPubkey: publicKey,
          //     toPubkey: new PublicKey(DUCK_COIN_ADDRESS),
          //     lamports: amount * LAMPORTS_PER_SOL,
          //   })
          // );

          // // Get the latest blockhash
          // const { blockhash } = await connection.getLatestBlockhash();
          // transaction.recentBlockhash = blockhash;
          // transaction.feePayer = publicKey;

          // // Send transaction
          // const signature = await sendTransaction(transaction, connection);

          // // Wait for confirmation
          // await connection.confirmTransaction(signature);

          sendSol(amount)
            .then(async (signature) => {
              console.log('Transaction Signature:', signature);
              // Update backend
              const res = await axios.post(`/api/deposit`, {
                amount,
              });

              setUser(res.data.user);
              alert('Deposit successful!');
            })
            .catch((error) => {
              if (error instanceof WalletSendTransactionError) {
                alert('Failed: ' + error.message);
              } else {
                console.error('Transaction failed:', error);
              }
            });
        });
      } catch (error) {
        console.log('Deposit failed:', error);
      }
    } else alert('Please enter a valid amount!');
  };

  return (
    <>
      <Header />
      <main className="p-10">
        <h1 className="text-2xl font-bold text-center mb-4">
          Deposit $DuckCoin
        </h1>

        <div className="p-4 rounded shadow max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            <span className="font-bold">Your balance</span>: {user?.balance}
          </p>
          <div>
            <label
              htmlFor="number-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Amount:
            </label>
            <input
              type="number"
              id="number-input"
              min="0"
              ref={amountRef}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount to deposit (SOL)"
              required
            />
          </div>
          <button className="btn" onClick={handleDeposit} disabled={loading}>
            Deposit
          </button>
        </div>
      </main>
    </>
  );
}
