import React from 'react'
import img from '../Assests/Sajal.png'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({Menu,SetMenu}) => {
  return (
    <>
    <nav>
      <NavContent SetMenu={SetMenu}/>
      
    </nav>
    <button className="navbtn"onClick={()=>SetMenu(!Menu)}>
        <AiOutlineMenu/>
      </button>
    </>
  )
};





export const NavContent = ({SetMenu})=>(
  <>
  <img src={img} alt='sajal'></img>
    <div>
      <a onClick={() => SetMenu(false)}href="#home">Home</a>
      <a onClick={() => SetMenu(false)}href="#skills">Skills</a>
      <a onClick={() => SetMenu(false)}href="#work">Projects</a>
      <a onClick={() => SetMenu(false)}href="#services">Services</a>
      <a onClick={() => SetMenu(false)}href="#contact">Contact</a>
    </div>
    <a href="mailto:sajaldhuriya11@gmail.com">
      <button>Email</button>
    </a>
  </>
)

export default Header