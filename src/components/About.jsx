import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-[20px] shadow-card group"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden"
            >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center">
                    <img src={icon} alt="web-development" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white text-[20px] font-bold text-center mt-4 group-hover:text-secondary transition-colors duration-300">{title}</h3>
                </div>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>About me.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I am a passionate and highly motivated software developer,
                always eager to learn and adapt to new technologies.
                My enthusiasm for <span className="text-tertiary">3D artistry</span>, <span className="text-tertiary">software development</span>, and <span className="text-tertiary">motion graphics</span> drives me to create engaging and innovative experiences.
                I thrive on challenges and am dedicated to expanding my skills to build impactful, real-world solutions.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
