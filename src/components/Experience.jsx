import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { projects } from "../constants";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const PhoneMockup = ({ screenshot, alt, className }) => (
    <motion.div
        className={`
            relative flex-shrink-0 min-w-0 rounded-[1.8rem]
            bg-gradient-to-b from-secondary/40 to-tertiary/40 p-[3px]
            shadow-[0_20px_60px_-15px_rgba(0,139,248,0.45)]
            ${className}
        `}
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
        <img
            src={screenshot}
            alt={alt}
            className="w-full h-full object-cover object-top rounded-[1.5rem]"
        />
    </motion.div>
);

PhoneMockup.propTypes = {
    screenshot: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

const FeaturedProjectCard = ({ project }) => (
    <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        scale={1.01}
        transitionSpeed={1500}
        className="w-full"
    >
        <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            className="bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-2xl shadow-card group relative overflow-hidden"
        >
            <div className="bg-tertiary rounded-2xl relative overflow-hidden">
                {/* Decorative gradient accents */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />

                <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:p-12">
                    {/* Phone screenshots row */}
                    <div className="flex items-start justify-center gap-3 sm:gap-6">
                        <PhoneMockup
                            screenshot={project.screenshots[0]}
                            alt={`${project.title} screenshot 1`}
                            className="h-48 sm:h-64 lg:h-[22rem]"
                        />
                        <PhoneMockup
                            screenshot={project.screenshots[1]}
                            alt={`${project.title} screenshot 2`}
                            className="h-60 sm:h-80 lg:h-[28rem]"
                        />
                        <PhoneMockup
                            screenshot={project.screenshots[2]}
                            alt={`${project.title} screenshot 3`}
                            className="h-48 sm:h-64 lg:h-[22rem]"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center text-center">
                        <span className="text-[12px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-primary text-secondary border border-secondary/20 mb-5">
                            Featured Project
                        </span>

                        <h3 className="text-white text-[26px] sm:text-[32px] lg:text-[38px] font-bold leading-tight group-hover:text-secondary transition-colors">
                            {project.title}
                        </h3>

                        <p className="mt-4 text-secondary/80 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl">
                            {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2 justify-center">
                            {project.tags.map((tag, idx) => (
                                <span
                                    key={`tag-${idx}`}
                                    className="text-[12px] px-3 py-1.5 rounded-md bg-primary/40 text-secondary border border-secondary/15 font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-xl hover:shadow-card transition-all duration-300"
                        >
                            <motion.button
                                className="bg-primary text-white px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className="w-5 h-5 object-contain"
                                />
                                View on GitHub
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    </Tilt>
);

FeaturedProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string.isRequired,
        screenshots: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

const ProjectCard = ({ project, index }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.15, 0.75)}
        whileHover={{ y: -8 }}
        className="bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-2xl shadow-card group relative overflow-hidden"
    >
        <div className="bg-tertiary rounded-2xl h-full overflow-hidden flex flex-col">
            {/* Image / placeholder area */}
            <div className="relative h-44 overflow-hidden flex-shrink-0">
                {project.image ? (
                    <>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    </>
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary via-primary/70 to-black-200 relative flex items-center justify-center overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
                        <span className="text-7xl font-black text-secondary/10 select-none">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                )}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-white text-[18px] font-bold leading-snug group-hover:text-secondary transition-colors">
                        {project.title}
                    </h3>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-shrink-0"
                    >
                        <motion.div
                            className="w-9 h-9 rounded-lg flex items-center justify-center bg-primary/40 group-hover:bg-primary transition-colors border border-secondary/10"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={github}
                                alt="GitHub"
                                className="w-5 h-5 object-contain"
                            />
                        </motion.div>
                    </a>
                </div>

                <p className="text-secondary/75 text-[13px] leading-relaxed mb-4">
                    {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={`tag-${idx}`}
                            className="text-[10px] px-2 py-1 rounded-md bg-primary/30 text-secondary border border-secondary/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        github: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

const Experience = () => {
    const featured = projects.find((project) => project.featured);
    const secondaryProjects = projects.filter((project) => !project.featured);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Featured work
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Projects.
                </h2>
            </motion.div>

            {/* Featured project hero */}
            {featured && (
                <div className="mt-20">
                    <FeaturedProjectCard project={featured} />
                </div>
            )}

            {/* Secondary projects grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>

            {/* GitHub Link */}
            <div className="flex justify-center mt-12">
                <a
                    href="https://github.com/JeffersonDevR?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-secondary to-tertiary p-[2px] rounded-xl shadow-card hover:shadow-card transition-all duration-300"
                >
                    <motion.button
                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See all my projects on GitHub
                    </motion.button>
                </a>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
