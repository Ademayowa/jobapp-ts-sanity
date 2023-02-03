import { useState } from 'react';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import { navLinks } from '@/constants/index';

export default function Navbar() {
  const [active, setActive] = useState<any>('Home');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className='flex w-full items-center justify-between bg-blueColor py-5 px-5 md:px-20'>
      <Link href='/'>
        <a className='text-lg text-white'>Find Gigs</a>
      </Link>

      <ul className='hidden flex-1 items-center justify-end md:flex'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-lg ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <Link href={`${nav.page}`}>
              <a>{nav.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile screens */}
      <div className='flex flex-1 cursor-pointer items-center justify-end md:hidden'>
        <img
          src={toggle ? '/close.svg' : '/menu.svg'}
          alt='menu'
          className='h-[30px] w-[30px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } absolute top-20 right-0 !z-50 my-2 h-[80vh] w-full bg-blueColor p-6`}
        >
          <ul className='flex flex-1 !cursor-pointer list-none flex-col items-start text-xl font-bold'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-[16px] font-medium ${
                  active === nav.title ? 'text-[#143544]' : 'text-white'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`${nav.page}`}>
                  <a>{nav.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
