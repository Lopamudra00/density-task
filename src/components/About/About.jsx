import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './About.css'

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const orangeCircleVariants = {
        hidden: { opacity: 0, x: 0, y: 300, className: "hidden-state" },
        visible: {
            scale: 1.1, transition: {
                duration: 3,
                delayChildren: 0.5
            },
            className: "visible-state"
        },
    };

    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
    });
    const titleVariants = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    };


    return (
        <div className="a-wrapper">
            <div className="a-container">
                <div className="a-left">
                    <motion.p className="a-text"
                        ref={titleRef}
                        initial="hidden"
                        animate={titleInView ? "visible" : "hidden"}
                        variants={titleVariants}
                    >
                        Built out of frustration
                    </motion.p>

                    <motion.h1 className="a-title"
                        ref={titleRef}
                        initial="hidden"
                        animate={titleInView ? "visible" : "hidden"}
                        variants={titleVariants}
                        duration="2"
                    >
                        <b>Meet the ahead app</b>
                    </motion.h1>
                    <motion.div className="bg-orange-circle"
                        ref={ref}
                        initial="initial"
                        animate={inView ? "visible" : "hidden"}
                        variants={orangeCircleVariants}

                    ></motion.div>
                    <div className="bg-white-circle">
                        <div>
                            <img className="a-img" src={require('../../img/voilet.png')} />
                        </div>
                    </div>
                </div>
                <div className="a-right">
                    <motion.div className="para-1"
                        ref={titleRef}
                        initial="hidden"
                        animate={titleInView ? "visible" : "hidden"}
                        variants={titleVariants}
                        duration="2"
                    >
                        A personalised pocket coack that provodes bite-sized , science-driven tools to boost emotionala intelligence.
                    </motion.div>
                    <motion.div className="para-2"
                        ref={titleRef}
                        initial="hidden"
                        animate={titleInView ? "visible" : "hidden"}
                        variants={titleVariants}
                        duration="2"
                    >
                        Think of it as a pocket cheerleader towards a better,more fulfilling.
                    </motion.div>
                </div>

            </div>

        </div>
    )
}

export default About