import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

const Navbar = () => {
  const [isLinkActived, setIsLinkActived] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState('');
  return (
    <nav
      className={`${styles.paddingX} m-3 w-[calc(100%-1.5rem)] flex items-center py-5 fixed bottom-0 z-20 backdrop-blur-md shadow-md border-t border-gray-800 border-opacity-100 rounded-3xl bg-gradient-to-b from-gray-900`}
    >
      <div className="flex items-center justify-between w-full mx-auto flex-start max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setIsLinkActived('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="object-contain h-9 w-9 "
          />
          <p className="text-white text-[18px] font-semibold cursor-pointer whitespace-nowrap flex align-middle">
            آکولاد
            <span className="hidden text-white md:flex font-extralight text-opacity-60">
              &nbsp; | مهدی عسکرپور
            </span>
          </p>
        </Link>
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                isLinkActived === navLink.title
                  ? 'text-white'
                  : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setIsLinkActived(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>

        <motion.div
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
          className="flex items-center justify-end flex-1 sm:hidden"
        >
          <motion.button
            whileTap={{
              scale: 0.7,
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-white border-t border-gray-800 border-opacity-100 shadow-md bg-opacity-10 rounded-xl backdrop-blur-md bg-gradient-to-b from-gray-900"
          >
            <img
              src={isMenuOpen ? close : menu}
              alt="menu"
              className="w-[25px] h-[25px] object-contain cursor-pointer opacity-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </motion.button>

          <motion.ul
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 1rem)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(90% 50% 10% 50% round 1rem)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className={`${
              isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            } p-6 w-full absolute bottom-[6rem] left-0 -z-10 backdrop-blur-md shadow-inner border border-gray-800 rounded-3xl bg-gray-900 list-none grid grid-cols-3 xs:grid-cols-4 justify-items-center gap-4`}
          >
            {navLinks.map((navLink) => (
              <motion.li
                variants={itemVariants}
                key={navLink.id}
                className={`${
                  isLinkActived === navLink.title
                    ? 'text-white bg-blue-600 hover:bg-opacity-50 '
                    : 'text-secondary bg-white  bg-opacity-10 hover:bg-opacity-5 '
                } p-3 w-full rounded-2xl transition-colors text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsLinkActived(navLink.title);
                }}
              >
                <a
                  href={`#${navLink.id}`}
                  className={`${
                    isLinkActived === navLink.title ? '' : ''
                  } flex flex-col items-center text-sm xs:text-md sm:text-lg`}
                >
                  <img
                    alt={navLink.title}
                    src={navLink.icon}
                    className="opacity-50 w-[80%] mb-1"
                  />
                  {navLink.title}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
