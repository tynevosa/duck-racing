'use client';
import { useState } from 'react';
import axios from 'axios';

export default function DuckAuction({ wallet }: { wallet: string }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('blue');

  const handleSponsor = async () => {
    const res = await axios.post('/api/sponsor-duck', {
      wallet,
      name,
      color,
    });
    alert(res.data.success ? 'Sponsorship successful!' : res.data.error);
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Sponsor a Duck</h2>
      <input
        type="text"
        className="input"
        placeholder="Duck Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        onChange={(e) => setColor(e.target.value)}
        value={color}
        className="input mt-2"
      >
        <option>blue</option>
        <option>red</option>
        <option>yellow</option>
        <option>green</option>
      </select>
      <button className="btn mt-2" onClick={handleSponsor}>
        Submit
      </button>
    </div>
  );
}
