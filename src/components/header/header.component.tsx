import { ExternalLinks } from '@/constants/links';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div
        className={`max-width-container flex items-center justify-between py-5! border-b transition-all duration-300 ${
          isScrolled ? 'border-gray-200' : 'border-white/65'
        }`}
      >
        <div className='w-20'>
          <a href='/'>
            <img src='brand-full.png' className='w-full h-full' alt='Fozo' />
          </a>
        </div>

        <div className='hidden lg:flex items-center gap-3'>
          <ul
            className={`flex gap-3 text-lg font-medium transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#howItWorks'>How it works?</a>
            </li>
            <li>
              <a href={ExternalLinks.blogs} target='_blank'>
                Blogs
              </a>
            </li>
          </ul>
          <div className='flex gap-3'>
            <a
              href={ExternalLinks.joinWaitlist}
              target='_blank'
              className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-light-green! text-primary!'
            >
              Join Waitlist
            </a>
            {/* <button className='w-min whitespace-nowrap px-3 py-2 rounded-2xl text-sm bg-light-green text-primary!'>
              Get the App
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
