const ReadyToBecomeAHero = () => {
  return (
    <section className='w-full bg-secondary pt-32 h-[848px] relative flex flex-col'>
      <p className='font-black-hans font-bold text-[44px] text-center text-primary pb-8'>
        Ready to become a Food Hero?
      </p>

      <button className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-brand-orange text-white mx-auto'>
        Get the App
      </button>

      <img
        src='phone.png'
        className='h-[480px] object-contain absolute -translate-x-1/2 left-1/2 bottom-0 w-full pr-16'
        alt='save earth'
      />
    </section>
  );
};

export default ReadyToBecomeAHero;
