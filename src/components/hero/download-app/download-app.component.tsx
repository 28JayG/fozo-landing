import DownloadAppCard from './download-app-card/download-app-card.component';

const DownloadApp = () => {
  return (
    <section className='w-full bg-primary text-white py-20'>
      <div className='max-width-container flex items-center justify-between'>
        <p className='font-medium text-4xl w-96'>
          Download the app that helps you{' '}
          <span className='text-brand-orange'>save money and the planet</span>
        </p>
        <div className='flex gap-11'>
          <DownloadAppCard appLink='' platform='iOs' qrImageLink='' />
          <DownloadAppCard appLink='' platform='Android' qrImageLink='' />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
