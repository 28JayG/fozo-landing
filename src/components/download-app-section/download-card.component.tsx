// components/DownloadCard.tsx
import React from 'react';
import Image from 'next/image';

type Props = {
  platform: string;
  qrCode: string;
  icon: string; // could be emoji, svg, or image path
};

export const DownloadCard: React.FC<Props> = ({ platform, qrCode, icon }) => {
  return (
    <div className='bg-white/5 shrink-0 py-8 px-6 rounded-xl flex flex-col w-64 h-64 aspect-square rounded-3xl'>
      <p className='font-semibold text-2xl text-white pb-3'>For {platform}</p>
      <button className='bg-[#D4ED6D] p-3 w-min whitespace-nowrap mb-5 rounded-4xl text-[#00494A] min-w-0'>
        Download App
      </button>
      <Image src={qrCode} alt={`${platform} QR`} width={100} height={100} />
      {/* <div className='text-3xl'>{icon}</div> */}
    </div>
  );
};
