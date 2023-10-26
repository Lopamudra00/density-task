import angryImage from '../../img/angry.png'
import surprisedImage from '../../img/surprised.png'
import heartEyes from '../../img/heart-eyes.png'
import unamused from '../../img/unamused.png'
import grimacing from '../../img/grimacing.png'
import './Cards.css'
import React from 'react'
import { motion } from 'framer-motion';

function Cards() {
    return (
        <div className="c-wrapper">
            <motion.div className="c-carousel"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                drag="x"
                transition={{ duration: 2 }}
            >
                {data.map((d, index) => (
                    <motion.div className="card" key={index}
                        initial="hidden"
                        whileInView="visible"
                        data={d}
                        whileTap={{ scale: 0.9 }}
                        dragConstraints={{ left: 0, right: 0 }}

                    >
                        <div className="card-image">
                            <img className="img" src={d.img} alt="" />
                        </div>
                        <div className="card-des">
                            <p><b>{d.title}</b></p>
                            <p> {d.desc} </p>
                        </div>
                    </motion.div>
                ))}

            </motion.div>

        </div >
    )
}

export default Cards
const data = [
    {
        id: 1,
        name: `emoji1`,
        img: angryImage,
        title: 'You angue with a colleague',
        desc: `You get angry and defensive , instead of staying open and working towards common ground.`

    },
    {
        id: 2,
        name: `emoji2`,
        img: surprisedImage,
        title: `You get a promotion at work`,
        desc: `You question yourself and wonder when they'll realise you're an unqualified imposter , instead of trusting yourself & your abilities.`
    },
    {
        id: 3,
        name: `emoji3`,
        img: heartEyes,
        title: `You attend a class reunion`,
        desc: `You compare yourself with your peers' achievements,instead of making your self-judgement more dependent of others.`
    },
    {
        id: 4,
        name: `emoji4`,
        img: unamused,
        title: `You are at a lively dinner party`,
        desc: `You play on your phone,instead of confidently approaching strangers and striking up a chat.`
    },
    {
        id: 5,
        name: `emoji5`,
        img: grimacing,
        title: `You hit dead end in a negotiation`,
        desc: `You get nervous , frozzled, and frustrated,instead of staying optimistic and solution-oriented.`
    }
]