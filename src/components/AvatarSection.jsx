import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { AvatarCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const AvatarSection = () => {
    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <AvatarCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(AvatarSection, "contact");
