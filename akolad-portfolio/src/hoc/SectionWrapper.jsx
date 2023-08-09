import {motion} from 'framer-motion';

import {styles} from '../styles'
import {staggerContainer} from "../utils/motion.js";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.2}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 overflow-hidden`}
      >
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper;