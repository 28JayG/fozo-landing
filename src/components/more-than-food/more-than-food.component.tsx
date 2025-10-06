const MoreThanFood = () => {
  return (
    <section className='w-full bg-secondary pt-16 lg:pt-32 h-[560px] lg:h-[848px] relative'>
      <div className='hidden lg:block absolute top-4 -right-16'>
        <img alt='' className='w-full h-full' src='pattern.svg' />
      </div>
      <div className='hidden lg:block absolute bottom-8 -left-28'>
        <img alt='' className='w-full h-full' src='pattern.svg' />
      </div>

      <div className='max-width-container pb-36'>
        <div className='flex flex-col items-center w-full'>
          <p className='font-bold text-xl lg:text-2xl text-center'>More than just</p>
          <p className='font-black-hans font-bold text-center text-3xl lg:text-[44px] text-[#055F19]'>
            ordering just food
          </p>
        </div>
      </div>

      <img
        src='food-earth.png'
        className='lg:h-[480px] object-contain absolute -translate-x-1/2 left-1/2 bottom-0'
        alt='save earth'
      />

      <div className='grid grid-cols-2 mt-10 px-4 lg:px-0 lg:0 gap-x-12 gap-y-6 lg:gap-x-72 lg:gap-y-24 mx-auto relative'>
        <div className='flex flex-col gap-4 items-end'>
          <img className='w-6 h-6 lg:w-8 lg:h-8' src='rupee-icon.png' alt='earth icon' />
          <p className='text-lg lg:text-2xl font-bold text-right'>Save upto 50% on Every Meal</p>
        </div>
        <div className='flex flex-col gap-4 items-start'>
          <img
            className='w-6 h-6 lg:w-8 lg:h-8 shrink-0'
            src='soup-icon.png'
            alt='earth icon'
          />
          <p className='text-lg lg:text-2xl font-bold'>Enjoy Fresh Quality Food</p>
        </div>
        <div className='flex flex-col gap-4 items-end xl:mr-96'>
          <img
            className='w-6 h-6 lg:w-8 lg:h-8 shrink-0'
            src='earth-icon.png'
            alt='earth icon'
          />
          <p className='text-lg lg:text-2xl font-bold text-right'>Fight Waste, Feel Good</p>
        </div>
        <div className='flex flex-col gap-4 items-start xl:ml-96'>
          <img
            className='w-6 h-6 lg:w-8 lg:h-8 shrink-0'
            src='open-box-icon.png'
            alt='earth icon'
          />
          <p className='text-lg lg:text-2xl font-bold'>Discover Local Favourites</p>
        </div>
      </div>
    </section>
  );
};

export default MoreThanFood;
