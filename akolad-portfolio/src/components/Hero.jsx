import { motion } from 'framer-motion';
import ReactTyped from 'react-typed';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 bg-blue-600 rounded-full" />
          <div className="w-1 h-40 rounded-b-full sm:h-80 bg-gradient-to-b from-blue-600"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            سلام! <br className="lg:hidden" />
            من&nbsp;
            <span className="text-blue-500 ">
              <ReactTyped
                strings={[
                  'مهدی عسکرپور',
                  'آقای { &nbsp;&nbsp; }',
                  'آقای آکولاد',
                  'توسعه دهنده نرم افزار',
                  'توسعه دهنده React',
                  'توسعه دهنده Flutter',
                  'طراح رابط کاربری',
                  'iMahdi1383',
                ]}
                typeSpeed={120}
                backSpeed={50}
                backDelay={2500}
                loop
                smartBackspace
              />
            </span>
            &nbsp;هستم.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white opacity-50`}>
            توسعه دهنده React و Flutter ، طراح رابط کاربری
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
