import Header from "./Components/Header.jsx"
import Home from "./Components/Home";
import Skills from "./Components/Skills.jsx";
import Work from "./Components/Work"
import Timeline from "./Components/Timeline"
import Services from "./Components/Services"
import Contact from "./Components/Contact.jsx"
import Footer from "./Components/Footer.jsx"
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import PhoneResponsive from "./Components/PhoneResponsive.jsx";



function App() {


  const [Menu,SetMenu] = useState(false);

  return (
    <>
    <PhoneResponsive Menu={Menu} SetMenu={SetMenu}/>
    <Header Menu={Menu} SetMenu={SetMenu}/>
    <Home/>
    <Skills/>
    <Work/>
    <Timeline/>
    <Services/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;
