import {motion} from 'framer-motion';
import ReactTyped from 'react-typed';

import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (<section className="relative flex flex-col w-full h-screen mx-auto">
    <div
      className={`${styles.paddingX} absolute inset-0 top-[50px] xs:top-[30px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="w-5 h-5 bg-blue-600 rounded-full" />
        <div className="w-1 h-40 rounded-b-full sm:h-80 bg-gradient-to-b from-blue-600"></div>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          سلام! من&nbsp;
          <br className="block xs:hidden" />
          <span className="text-blue-500 ">
              <ReactTyped
                strings={['مهدی عسکرپور', 'توسعه دهنده نرم افزار', 'توسعه دهنده React', 'توسعه دهنده Flutter', 'طراح رابط کاربری', 'iMahdi1383',]}
                typeSpeed={120}
                backSpeed={50}
                backDelay={2500}
                loop
                smartBackspace
              />
            </span>
          <br className="block xs:hidden" />
          &nbsp;هستم.
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white opacity-50`}>
          توسعه دهنده React و Flutter ، طراح رابط کاربری
        </p>
      </div>
    </div>

    {/*<ComputersCanvas />*/}

    <div className="absolute flex items-center justify-center w-full xs:bottom-32 bottom-32">
      <a href="./#about">
        <div
          className="w-[35px] h-[60px] rounded-3xl backdrop-blur-sm bg-white bg-opacity-5 hover:bg-opacity-10 border-2 border-white border-opacity-5 hover:border-opacity-20 transition flex justify-center items-start p-2"
        >
          <motion.div
            animate={{
              y: [2, 16, 2], height: [8, 14, 8, 8, 8],
            }}
            transition={{
              duration: 1.5, repeat: Infinity, repeatType: 'loop',
            }}
            className="w-2 h-2 bg-white rounded-full bg-opacity-20"
          ></motion.div>
        </div>
      </a>
    </div>
  </section>);
};

export default Hero;
