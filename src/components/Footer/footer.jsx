import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import { IoLogoLinkedin } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import adro from '../../assets/android.png'
import Io from '../../assets/ios.png'


const footer = () => {
  return (
    <div className='Footer'>
      <div className="FOOTES">
        <img className='fkht' height={40} src={logo} alt="" />
      </div>
      <div className="foot">
      {/* <div className="FOOTERS">
        <img height={40} src={logo} alt="" />
      </div> */}
      <div className="footer1">
          <h4 className='foot-tect'>Eternal</h4>
          <li>Zomato</li>
          <li>Blinkit</li>
          <li>District</li>
          <li>Hyperpure</li>
          <li>Feeding India</li>
          <li>Investor Relations</li>
      </div>
            <div className="footer1">
          <h4 className='foot-tect'>For Restaurants</h4>
          <li>Partner With Us</li>
          <li>Apps For You</li>
      </div>
          <div className="footer1">
          <h4 className='foot-tect'>For Delivery <br />Partners</h4>
          <li>Partner With Us</li>
          <li>Apps For You</li>
      </div>
      <div className="footer1">
          <h4 className='foot-tect'>Learn More</h4>
          <li>Privacy</li>
          <li>Security</li>
          <li>Terms of Service</li>
          <li>Help & Support</li>
          <li>Report a Fraud</li>
          <li>Blog</li>
      </div>
          <div className="footer1">
          <h4 className='foot-tect'>Social Links</h4>
          <div className="foot-con">
            <IoLogoLinkedin />
            <LuInstagram />
            <IoLogoYoutube />
            <FaFacebook />
            <FaTwitter />
          </div>
          <div className='footer-img'>
            <div>
              <img className='foot-last'  height={45} src={adro} alt="" />
            </div>
            <div className='footer-img'>
              <img className='foot-strst' height={51} src={Io} alt="" />
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default footer
