import { motion } from "framer-motion";
import { AvatarCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const AvatarSection = () => {
    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="relative xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <AvatarCanvas />
                <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                    {/* drifting gradient blobs */}
                    <motion.div
                        className="absolute -left-20 -top-24 h-72 w-72 rounded-full blur-3xl mix-blend-screen"
                        style={{ background: "radial-gradient(circle, rgba(0,139,248,0.28) 0%, transparent 65%)" }}
                        animate={{ x: [0, 48, 0], y: [0, -36, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute -bottom-20 -right-16 h-80 w-80 rounded-full blur-3xl mix-blend-screen"
                        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%)" }}
                        animate={{ x: [0, -44, 0], y: [0, 32, 0] }}
                        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* subtle HUD grid */}
                    <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(233,241,247,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(233,241,247,0.6) 1px, transparent 1px)",
                            backgroundSize: "44px 44px",
                        }}
                    />
                    {/* scanning line */}
                    <motion.div
                        className="absolute inset-x-0 h-16 opacity-[0.12] mix-blend-screen"
                        style={{
                            background: "linear-gradient(to bottom, transparent, rgba(0,139,248,0.9), transparent)",
                        }}
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(AvatarSection, "contact");
