import { ExternalLinks } from '@/constants/links';
import StepCard from './step-card/step-card.component';

const HowToFozo = () => {
  return (
    <section
      id='howItWorks'
      className='w-full bg-primary pt-16 lg:pt-32 pb-16 relative flex flex-col items-center'
    >
      <div className='absolute top-4 -right-16 hidden lg:block'>
        <img alt='' className='w-full h-full' src='pattern.svg' />
      </div>
      <div className='absolute bottom-8 -left-28 hidden lg:block'>
        <img alt='' className='w-full h-full' src='pattern.svg' />
      </div>

      <div className='max-width-container pb-36'>
        <div className='flex flex-col items-center w-full'>
          <p className='font-bold text-xl lg:text-2xl text-center text-white'>
            How does it work
          </p>
          <p className='font-black-hans text-center font-bold text-3xl lg:text-[44px] text-brand-yellow'>
            How to Fozo it
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 max-width-container gap-9 py-6! lg:pt-0 lg:pb-20!'>
        <StepCard
          description='Open the app to see real-time food bags from nearby eateries.'
          title='Browse Surprise Bags'
          img='https://i.ibb.co/zVL5LhNm/Img-1.png'
        />
        <StepCard
          description='Select your bag, select a lunch/dinner time, and pay securely.'
          title='Order & Pay'
          img='https://i.ibb.co/7tNSQ7VJ/Img-2.png'
        />
        <StepCard
          description='Sit back as your Fozo bag arrives at your doorstep.'
          title='Get Delivery & Dig In'
          img='https://i.ibb.co/C3tJh5jV/Img-3.png'
        />
      </div>

      {/* TODO: remove this later */}
      <a href={ExternalLinks.joinWaitlist} target='_blank'>
        <button className='cursor-pointer w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-brand-orange text-white'>
          Join Waitlist
        </button>
      </a>
      {/* <button className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-brand-orange text-white'>
        Get the App
      </button> */}
    </section>
  );
};

export default HowToFozo;
