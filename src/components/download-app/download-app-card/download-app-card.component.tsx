import { FC } from 'react';

interface Props {
  platform: string;
  appLink: string;
  qrImageLink: string;
}

const DownloadAppCard: FC<Props> = ({ platform, appLink, qrImageLink }) => {
  const getPlatformIcon = () => {
    switch (platform.toLowerCase()) {
      case 'android':
        return (
          <div className='w-6 h-6'>
            <img
              src='android-icon.png'
              className='w-full h-full object-contain'
              alt=''
            />
          </div>
        );
      case 'ios':
        return (
          <div className='w-6 h-6'>
            <img
              src='apple-icon.png'
              className='w-full h-full object-contain'
              alt=''
            />
          </div>
        );
    }
  };

  const openAppLink = () => {
    window.open(appLink, '_blank');
  };

  return (
    <div className='w-64 h-64 shrink-0 rounded-3xl bg-white/10 flex flex-col gap-5 px-6 pt-8 relative'>
      <p className='text-xl lg:text-2xl text-white font-bold'>For {platform}</p>
      <button
        role='link'
        onClick={openAppLink}
        className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-light-green text-primary'
      >
        Download Now
      </button>
      <div className='bg-white rounded-2xl w-20 h-20 overflow-hidden p-2'>
        <img
          className='w-full h-full object-contain'
          alt='app qr'
          src={qrImageLink}
        />
      </div>
      <div className='rounded-full w-16 h-16 border-4 border-primary bg-white/0 absolute -bottom-1 -right-1 flex items-center justify-center'>
        {getPlatformIcon()}
      </div>
    </div>
  );
};

export default DownloadAppCard;
