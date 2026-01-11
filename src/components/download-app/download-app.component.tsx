import { ExternalLinks } from '@/constants/links';
import DownloadAppCard from './download-app-card/download-app-card.component';

const DownloadApp = () => {
  return (
    <section id='get-apps' className='w-full bg-primary text-white py-10 lg:py-20'>
      <div className='max-width-container flex flex-col lg:flex-row gap-9 items-center justify-between'>
        <p className='font-medium text-2xl text-center lg:text-left lg:text-4xl w-full max-w-96'>
          Download the app that helps you{' '}
          <span className='text-brand-orange'>save money and the planet</span>
        </p>
        <div className='flex flex-col lg:flex-row gap-11'>
          <DownloadAppCard
            appLink={ExternalLinks.iosApp}
            platform='iOS'
            qrImageLink='https://i.ibb.co/HLqd1crH/qr-code.png'
          />
          <DownloadAppCard
            appLink={ExternalLinks.androidApp}
            platform='Android'
            qrImageLink='https://i.ibb.co/qYdnDyJj/qr-code.png'
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
