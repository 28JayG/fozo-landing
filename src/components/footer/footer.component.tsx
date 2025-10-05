import { ExternalLinks } from '@/constants/links';

const Footer = () => {
  return (
    <footer className='w-full h-full flex flex-col justify-between pt-32 bg-primary'>
      <div className='max-width-container flex justify-between gap-5'>
        {/* brand section */}
        <div className='flex flex-col gap-6'>
          <div className='w-20'>
            <img src='brand-full.png' className='w-full h-full' alt='Fozo' />
          </div>
          <p className='font-light text-white/65 text-base'>
            Order surplus meal from your go to spots at 50% off
          </p>
          <div className='flex items-center gap-5'>
            <a href='' className=''>
              <img alt='twitter-link' src='twitter.png' />
            </a>
            <a href='' className=''>
              <img alt='instagram-link' src='instagram.png' />
            </a>
            <a href='' className=''>
              <img alt='youtube-link' src='youtube.png' />
            </a>
          </div>
        </div>

        <div className='text-white flex flex-col'>
          <h1 className='font-bold text-xl pb-9'>Product</h1>
          <ul className='text-lg text-white/65'>
            <li className='pb-4'>
              <a href='#howItWorks'>How it works</a>
            </li>
            <li className='pb-4'>
              <a href={ExternalLinks.partnerWithUs} target='_blank'>
                Partner with us
              </a>
            </li>
            <li>
              <a href={ExternalLinks.blogs} target='_blank'>
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className='text-white flex flex-col'>
          <h1 className='font-bold text-xl pb-9'>Company</h1>
          <ul className='text-lg text-white/65'>
            <li className='pb-4'>
              <a href={ExternalLinks.contactUs} target='_blank'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='mailto:admin@getfozo.in'>Careers</a>
            </li>
          </ul>
        </div>

        <div className='text-white flex flex-col'>
          <h1 className='font-bold text-xl pb-9'>Support</h1>
          <ul className='text-lg text-white/65'>
            <li className='pb-4'>
              <a href='#faq'>FAQ's</a>
            </li>
            <li className='pb-4'>
              <a href={ExternalLinks.contactUs} target='_blank'>
                Help Center
              </a>
            </li>
          </ul>
        </div>

        <div className='text-white flex flex-col'>
          <h1 className='font-bold text-xl pb-9'>Contact Us</h1>
          <ul className='text-lg text-white/65'>
            <li className='pb-4'>
              <a
                href='mailto:admin@getfozo.in'
                className='flex gap-2 items-center'
              >
                <span className='material-symbols-outlined'>mail</span>{' '}
                admin@getfozo.in
              </a>
            </li>
            <li className='pb-4'>
              <a className='flex gap-2 items-center' href='tel:+91 9899879876'>
                <span className='material-symbols-outlined'>call</span> +91
                9899879876
              </a>
            </li>
            <li className='pb-4'>
              <a href='' className='flex gap-2'>
                <span className='material-symbols-outlined'>location_on</span>{' '}
                Bangalore, India
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='max-width-container flex justify-between gap-5 border-t py-6 border-white/65'>
        <p className='text-lg text-white/65'>Copyright © getfozo.in</p>
        <p className='text-lg text-white/65'>
          All Rights Reserved |{' '}
          <a href='' className='text-[#9BE05E]! underline!'>
            Terms and Conditions
          </a>{' '}
          |{' '}
          <a href='' className='text-[#9BE05E]! underline!'>
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
