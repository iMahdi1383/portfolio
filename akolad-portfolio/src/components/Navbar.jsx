import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState('');
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex flex-start justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer whitespace-nowrap flex align-middle">
            آکولاد
            <span className="hidden md:flex font-light text-white text-opacity-60">
              &nbsp; | مهدی عسکرپور
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 backdrop-blur-lg bg-black bg-opacity-20 shadow-md border-white border-opacity-5 border-1 backdrop:blur-md absolute top-[4rem] left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 items-start justify-end">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`${
                    active === navLink.title ? 'text-white' : 'text-secondary'
                  } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(navLink.title)}}
                >
                  <a href={`#${navLink.id}`}>
                    {navLink.title}
                    {
                      // todo : resume from '38:12'
                    }
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
