import { ExternalLinks } from '@/constants/links';

const ReadyToBecomeAHero = () => {
  return (
    <section className='w-full bg-secondary pt-0 lg:pt-32 h-[384px] lg:h-[848px] relative flex flex-col'>
      <p className='font-black-hans font-bold text-2xl lg:text-[44px] text-center text-primary pb-5 lg:pb-8'>
        Ready to become a Food Hero?
      </p>

      {/* <button className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-brand-orange text-white mx-auto'>
        Get the App
      </button>
       */}
      {/* TODO: remove this later */}
      <a href={ExternalLinks.joinWaitlist} target='_blank' className='mx-auto cursor-pointer'>
        <button className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-brand-orange text-white mx-auto'>
          Join Waitlist
        </button>
      </a>

      <img
        src='phone.png'
        className='lg:h-[480px] object-contain absolute -translate-x-1/2 left-1/2 bottom-0 w-full lg:pr-16 px-4 lg:px-0'
        alt='save earth'
      />
    </section>
  );
};

export default ReadyToBecomeAHero;
