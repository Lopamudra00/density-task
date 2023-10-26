import React from "react";
import { motion } from "framer-motion";
import './Home.css';
const Home = () => {
    return (
        <section className="h-wrapper">
            <div className=" flexCenter h-container">
                <div className="h-left">
                    <div className="orange-circle2"></div>
                    <div className="orange-circle2"></div>
                    <div className="orange-circle"></div>
                    <motion.h1
                        className="h-title"
                        initial={{ x: 100 }}
                        animate={{ x: [-900, 0] }}
                        transition={{
                            duration: "2",

                        }}

                    >Mastering your life
                        <br />
                        by mastering
                        <br />
                        emotions</motion.h1>
                </div>
                <motion.div
                    className="h-right"
                    initial={{ x: 100 }}
                    animate={{ x: [900, 0] }}
                    transition={{
                        duration: "2",

                    }}


                >
                    <div className="h-image">
                        <img className="image" src={require('../../img/mobile-org.png')} ></img>
                    </div>
                </motion.div>
                <div className="bg-elements">
                    <div className="orange-circle3"></div>
                    <div className="orange-circle4"></div>
                    <img className="emoji-img1" src={require('../../img/OK-emoji.png')} />


                </div>
            </div>
        </section>
    )
}
export default Home;