import { FC } from 'react';

interface Props {
  platform: string;
  appLink: string;
  qrImageLink: string;
}

const DownloadAppCard: FC<Props> = ({ platform, appLink, qrImageLink }) => {
  return (
    <div className='w-64 h-64 shrink-0 rounded-3xl bg-white/10 flex flex-col gap-5 px-6 pt-8 relative'>
      <p className='text-2xl text-white font-bold'>For {platform}</p>
      <button className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-light-green text-primary'>
        Download Now
      </button>
      <div className='bg-white rounded-2xl w-20 h-20 p-5'>
        <img
          className='w-full h-full object-contain'
          alt='app qr'
          src={appLink}
        />
      </div>
      <div className='rounded-full w-16 h-16 border-4 border-primary bg-white/0 absolute -bottom-1 -right-1'></div>
    </div>
  );
};

export default DownloadAppCard;
