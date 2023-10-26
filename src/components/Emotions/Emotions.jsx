import React from "react";
import './Emotions.css';
import Cards from '../Cards/Cards'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Emotions = () => {
    const titleVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1, // Adjust the duration as needed
            },
        },
    };
    const [titleRef, inView] = useInView({
        triggerOnce: true, // Animation triggers only once when it comes into view
    });
    return (
        <section className="e-wrapper">
            <div className="flexCenter e-container">
                <div className="e-upper">
                    <div className="e-des">
                        <div className="des">
                            <h3 className="title1">EQ beats IQ</h3>
                        </div>
                        <div className="des">
                            People with high emotional intelligence (EQ) live more fulfilled lives.They tend to be happier and healthier relationships.
                        </div>
                        <div className="des">
                            They are more successful in their pursuits and make for inspiring leaders. According to science , they earn $29k a year.
                        </div>
                    </div>

                </div>
                <div className="e-lower">
                    <motion.div className="lower-wrap"
                        ref={titleRef}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={titleVariants}

                    >
                        <h1 className="title2"

                        ><b>Does this sound similar...</b></h1>
                        <img src={require('../../img/angry-org.png')} />
                    </motion.div>
                    <Cards />
                </div>

            </div>
        </section>

    )
}
export default Emotions;