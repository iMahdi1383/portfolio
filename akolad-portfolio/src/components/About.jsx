import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import * as PropTypes from "prop-types";


const ServicesCard = ({index, title, icon}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] rounded-[20px] rounded-tl-[200px] w-full green-pink-gradient p-[1px] shadow-card"
    >
      <Tilt
        glareEnable={true}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        transitionSpeed={1000}
        glareColor={"#ff0044"}
        glarePosition={"all"}
        glareBorderRadius={"20px"}
        className="transform-style-3d relative bottom-4 right-4"
      >
        <div
          className="translate-z-10 rounded-[20px] scale-[0.95] transition bg-white bg-opacity-10 border border-white border-opacity-30 backdrop-blur-md py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center"
        >
          <img
            src={icon}
            alt={title}
            className="	w-16 h-16 object-contain"
          />
          <h3
            className=" text-white text-[20px] font-semibold text-center"
          >
            {title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  )
}


const About = () => {
  return (<>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        من چه کسی هستم؟
      </p>
      <h2 className={styles.sectionHeadText}>
        درباره من
      </h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
    >
      من مهدی عسکرپور، توسعه دهنده نرم افزار و طراح رابط کاربری، متولد 1383، مجرد و در حال حاضر دانشجوی رشته نرم افزار
      هستم. از 13 سالگی به برنامه نویسی علاقمند شدم و در حوزه های مختلف توسعه نرم افزار فعالیت هایی داشتم. از زبان های
      سطح پایین مثل C برای برنامه نویسی میکروکنترولر ها، تا زبان های سطح بالا مثل Python ، PHP و C# و Dart و C++ و
      JavaScript و ... تجربیاتی دارم. اما پس از یافتن گرایش مورد علاقه خودم، به سمت طراحی و توسعه نرم افزارهای Cross
      Platform و خصوصا سمت Frontend سوق یافتم.
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (<ServicesCard
        key={service.title}
        index={index} {...service} />))}
    </div>
  </>)
}

export default About