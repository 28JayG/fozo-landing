const Hero = () => {
  return (
    <section
      className='font-main font-bold flex flex-col-reverse h-[748px] text-white relative'
      style={{
        backgroundImage: 'url(hero.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20" ></div>
      <div className='flex flex-col max-width-container pb-56 relative'>
        <p className='text-3xl'>Bigger bites,</p>
        <p className='text-3xl'>
          -Pocket{' '}
          <span className='font-black-hans text-[44px] text-light-green'>
            Friendly price!!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
