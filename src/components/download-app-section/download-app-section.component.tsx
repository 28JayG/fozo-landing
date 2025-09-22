// components/DownloadAppSection.tsx
import React from 'react';
import { DownloadCard } from './download-card.component';

export default function DownloadAppSection() {
  return (
    <section className='bg-[#00494A] text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10'>
      {/* Left Section */}
      <div className='max-w-lg'>
        <h2 className='text-2xl md:text-3xl font-semibold leading-snug'>
          Download the app that helps you{' '}
          <span className='text-[#FF7A01]'>save money and the planet</span>
        </h2>
      </div>

      {/* Right Section */}
      <div className='flex gap-6'>
        <DownloadCard
          platform='iOS'
          qrCode='/qr-ios.png' // replace with actual QR code image path
          icon='🍎' // you can replace with Apple logo SVG
        />
        <DownloadCard
          platform='Android'
          qrCode='/qr-android.png' // replace with actual QR code image path
          icon='🤖' // replace with Android logo SVG
        />
      </div>
    </section>
  );
}
