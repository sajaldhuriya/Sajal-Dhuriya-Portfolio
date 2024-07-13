import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
  
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="main">
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/150020444?v=4"}
          alt="Founder"
        />

        <h2>Sajal Dhuriya</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/sajal-dhuriya-b2056b272/" target={"blank"}>
            <AiFillLinkedin/>
          </a>
          <a href="https://www.instagram.com/hmmm__me__sajal/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/sajaldhuriya" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp style={{ fill: '#232222' }}/>
      </a>
      </div>
    </footer>
  );
};

export default Footer;