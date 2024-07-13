import React from 'react'
import { motion } from 'framer-motion'
import { AiFillIeCircle ,AiFillWindows } from 'react-icons/ai'
import { BsClipboardDataFill } from "react-icons/bs";

const Services = () => {
    const animations={
        WhileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            x:"-100%",
            opacity:0,
        },
        twoandthree:{
            y:"-100%",
            opacity:0,
        },
        four:{
            x:"100%",
            opacity:0,
        },
    }
  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div 
            className='servicebox1'
            whileInView={animations.WhileInView}
            initial={animations.one}
            >
                <h3>Creative</h3>
                <p>Content Witing</p>
            </motion.div>
            <motion.div 
            className='servicebox2'
            whileInView={animations.WhileInView}
            initial={animations.twoandthree}
            transition={{
                delay:0.4,
            }}
            >
                <AiFillIeCircle  style={{ fill: '#232222' }}/>
                <span>Web Development</span>
            </motion.div>
            <motion.div 
            className='servicebox3'
            whileInView={animations.WhileInView}
            initial={animations.twoandthree}
            transition={{
                delay:0.7,
            }}
            >
                <BsClipboardDataFill style={{ fill: '#232222' }}/>
                <span>Data Analyst</span>
            </motion.div>
            <motion.div 
            className='servicebox4'
            whileInView={animations.WhileInView}
            initial={animations.four}
            transition={{
                delay:1,
            }}
            >
                <AiFillWindows style={{ fill: '#232222' }}/>
                <span>Desktop Development</span>
            </motion.div>
        </section>
    </div>
  )
}

export default Services