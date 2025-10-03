const MoreThanFood = () => {
  return (
    <section className='w-full bg-secondary pt-32 h-[848px] relative'>
      <div className='absolute top-4 -right-16'>
        <img alt='' className='w-full h-full' src='pattern.svg' />
      </div>
      <div className='absolute bottom-8 -left-28'>
        <img alt='' className='w-full h-full' src='pattern.svg' />
      </div>

      <div className='max-width-container pb-36'>
        <div className='flex flex-col items-center w-full'>
          <p className='font-bold text-2xl'>More than just</p>
          <p className='font-black-hans font-bold text-[44px] text-[#055F19]'>
            ordering just food
          </p>
        </div>
      </div>

      <img
        src='food-earth.png'
        className='h-[480px] object-contain absolute -translate-x-1/2 left-1/2 bottom-0'
        alt='save earth'
      />

      <div className='grid grid-cols-2 gap-x-72 gap-y-24 mx-auto relative'>
        <div className='flex flex-col gap-4 items-end'>
          <img className='w-8 h-8' src='rupee-icon.png' alt='earth icon' />
          <p className='text-2xl font-bold'>Save upto 50% on Every Meal</p>
        </div>
        <div className='flex flex-col gap-4 items-start'>
          <img
            className='w-8 h-8 shrink-0'
            src='soup-icon.png'
            alt='earth icon'
          />
          <p className='text-2xl font-bold'>Enjoy Fresh Quality Food</p>
        </div>
        <div className='flex flex-col gap-4 items-end mr-96'>
          <img
            className='w-8 h-8 shrink-0'
            src='earth-icon.png'
            alt='earth icon'
          />
          <p className='text-2xl font-bold'>Fight Waste, Feel Good</p>
        </div>
        <div className='flex flex-col gap-4 items-start xl:ml-96'>
          <img
            className='w-8 h-8 shrink-0'
            src='open-box-icon.png'
            alt='earth icon'
          />
          <p className='text-2xl font-bold'>Discover Local Favourites</p>
        </div>
      </div>
    </section>
  );
};

export default MoreThanFood;
