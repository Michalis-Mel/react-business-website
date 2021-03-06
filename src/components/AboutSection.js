import React from "react";
import { NavLink } from "react-router-dom";
//Import image
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <NavLink to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </NavLink>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="Guy with a photograph"
        />
      </Image>
    </About>
  );
};

export default AboutSection;
