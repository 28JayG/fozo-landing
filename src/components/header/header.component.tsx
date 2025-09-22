import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      isBlurred={false}
      className='bg-transparent text-white border-white border-opacity-20'
    >
      <NavbarBrand>
        <Image
          src='/images/brand-logo.png'
          alt='Logo'
          width={100}
          height={100}
        />
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/'>Home</Link>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/about'>How it works?</Link>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/about'>Blogs</Link>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <div className='flex gap-3'>
            <Image
              src='/images/play-badge.png'
              alt='badge'
              width={135}
              height={100}
            />
            <Image
              src='/images/store-badge.png'
              alt='badge'
              width={135}
              height={100}
            />
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
