import React from 'react'
import { motion } from 'framer-motion'
import  Typewriter from 'typewriter-effect'
import { BsArrowUpRight } from 'react-icons/bs'
import me from "../Assests/p3.png"

const Home = () => {
    const Animations = {
        h1:{
            initial:{
                x:'-100%',
                opacity:'0',
            },
            whileInView:{
                x:'0',
                opacity : 1,
            },
        },
        button:{
            initial:{
                y:'-100%',
                opacity:'0',
            },
            whileInView:{
                y:'0',
                opacity : 1,
            }
        }
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 
                whileInView={Animations.h1.whileInView}
                initial={Animations.h1.initial}
                transition={{
                    delay:0.2,
                }}
                >
                    Hi,It's 
                    <span> Sajal Dhuriya</span>
                </motion.h1>
                <h2>I am {'  '}
                    <Typewriter options={{
                    strings:['a Developer','a Coder ','an Engineer','a Data Analyst'],
                    Animations:ArrayBuffer,
                    skipAddStyles:true,
                    autoStart:true,
                    loop:true,
                    opacity:0,
                    cursor:'|',
                    wrapperClassName: 'Typewriter',
                    }}/>
                </h2>
                <p>I am Currently Pursuing My Btech From MNNIT Prayagraj. I Like To 
                    Design Websites Frontend and I also Create 3D Models FroM Solid Works.
                    I Also Like To DSA Problems. I Created This Website To Show My Projecst , Skills
                    To The Viewers And Got Their Feedback.
                </p>
                <div>
                <a id="hire" href="mailto:sajaldhuriya11@gmail.com">
                    Hire Me
                </a>
                <a href="#work" >
                    ProjectS <BsArrowUpRight />
                </a>
                </div>
            </div>
        </section>
        <section>
            <div>
                <img src={me} alt="sajal" />
            </div>
        </section>
    </div>
  )
}

export default Home