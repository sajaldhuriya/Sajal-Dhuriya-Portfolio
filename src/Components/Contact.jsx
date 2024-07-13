import React, { useState } from 'react'
import vg from "../Assests/vg.png"
import toast from 'react-hot-toast';
import {  motion } from 'framer-motion';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disablebtn,setdisablebtn] = useState(false);

    const submitHandler = async (e)=>{
        e.preventDefault();
        setdisablebtn(true);
        try {
          await addDoc(collection(db,"contacts"),{
            name,
            email,
            message,
          });
          toast.success("Message Sent")
          setName("")
          setEmail("")
          setMessage("")
          toast.success("Message Sent")
          setdisablebtn(false)
        } catch (error) {
          toast.error("Error")
          console.log(error);
          setdisablebtn(false)
        }    
    }
    const animations ={
      form:{
        initial:{
          x:"-100%",
          Opacity:0,
        },
        whileInView:{
          x:"0",
          opacity:1,
        },
        transition:{
          delay:0.5,
      }
      },
      button:{
        initial:{
          y:"0",
          Opacity:0,
        },
        whileInView:{
          y:"0",
          opacity:1,
        },
        transition:{
          delay:0.5,
      }
      },
    }
  return (
    <div id='contact'>
        <section>
            <motion.form onSubmit={submitHandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input 
                type='text' 
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                placeholder='Your Name' 
                required
                />
                <input 
                type='email' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Your Email' 
                required
                />
                <input 
                type='text' 
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                placeholder='Your meassage' 
                required
                />
                <motion.button 
                disabled={disablebtn}
                className={disablebtn ? "disablebtn":''}
                type="submit" {...animations.button}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="VectorGraphic" />
        </aside>
    </div>
  )
}

export default Contact