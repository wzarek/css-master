import React from 'react'
import { FaHome, FaHandsHelping, } from 'react-icons/fa';
import { AiFillBulb } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";


const Menu = () => {
  return (
     <nav>
          <ul>
              <li>
                 <FaHome/>
                  <a href="#Home">Home</a>
              </li>
              <li>
                  <FaHandsHelping/>
                  <a href="#HowItWorks">How it works</a>
              </li>
              <li>
                  <AiFillBulb/>
                  <a href="#About">About</a>
              </li>
              <li>
                  <BsTelephoneFill/>
                  <a href="#Contact">Contact</a>
              </li>
       </ul>
     </nav>
  )
}

export default Menu
