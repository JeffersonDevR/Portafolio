import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                {/* <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div> */}

                <div style={{ zIndex: 1 }}>
                    <h1 className={`${styles.heroHeadText} text-white text-3d `}>
                        Hi, I&apos;m{" "}
                        <motion.span
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-tertiary"
                        >
                            Jefferson Rodriguez
                        </motion.span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100 text-3d`}>
                        Software Development Student | 3D Enthusiast | Motion Graphics
                    </p>
                    <div className="flex sm:flex-row mt-6">
                        <a
                            href="https://github.com/JeffersonDevR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-[10px] shadow-card"
                        >
                            <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                                GitHub
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jeffersonrh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mb-4 sm:mb-0 sm:mr-4 bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-[10px] shadow-card"
                        >

                            <button className="bg-primary text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95  ">
                                LinkedIn
                            </button>
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* <ComputersCanvas /> */}
        </section>
    );
};

export default Hero;
