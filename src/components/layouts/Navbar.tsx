import Link from 'next/link';
import { MdOutlineAccountBox } from 'react-icons/md';
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineHome,
} from 'react-icons/ai';
import { HiX } from 'react-icons/hi';
import { useState } from 'react';

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`${
        show ? 'max-h-96' : 'h-fit'
      } shadow-md relative md:w-full md:mx-auto md:flex md:max-w-7xl md:p-2 md:justify-center md:items-center `}
    >
      <header className='w-full  flex justify-between items-center  md:justify-start px-4 md:px-20'>
        <Link href='/'>LOGO</Link>
        <button className='md:hidden' onClick={() => setShow((pre) => !pre)}>
          {show ? <HiX /> : <AiOutlineMenu />}
        </button>
      </header>

      <nav
        className={`${
          show ? 'translate-x-[0%]' : 'translate-x-[1000%]'
        } w-full flex items-center justify-center h-fit transform duration-300  md:translate-x-[0%] `}
      >
        <ul className='md:flex md:justify-end md:items-end '>
          <li
            className={` ${
              show ? 'my-10' : ''
            } md:my-0 md:mx-3  text-2xl text-blue-500`}
          >
            <Link href='/'>
              {' '}
              <AiOutlineHome />
            </Link>
          </li>
          <li
            className={` ${
              show ? 'my-10' : ''
            } md:my-0 md:mx-3   items-center text-2xl text-blue-500`}
          >
            <Link href='/account'>
              <MdOutlineAccountBox />
            </Link>
          </li>
          <li
            className={` ${
              show ? 'my-10' : ''
            } md:my-0 md:mx-3 items-center text-2xl text-blue-500`}
          >
            <Link href='/cart'>
              <AiOutlineShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
