import { ExternalLinks } from '@/constants/links';

const Header = () => {
  return (
    <header className='fixed top-0 w-full z-10'>
      <div className='max-width-container border-b border-white/65 flex items-center justify-between py-5!'>
        <div className='w-20'>
          <a href='/'>
            <img src='brand-full.png' className='w-full h-full' alt='Fozo' />
          </a>
        </div>

        <div className='flex items-center gap-3'>
          <ul className='flex gap-3 text-white text-lg'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#howItWorks'>How it works?</a>
            </li>
            <li>
              <a href={ExternalLinks.blogs} target='_blank'>Blogs</a>
            </li>
          </ul>
          <div className='flex gap-3'>
            <a
              href={ExternalLinks.joinAsStore}
              target='_blank'
              className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-light-green! text-primary!'
            >
              Join as Store
            </a>
            <button className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-light-green text-primary!'>
              Get the App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
