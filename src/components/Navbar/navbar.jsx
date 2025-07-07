import React from 'react'
import './navbar.css'
import NavLogo from '../../assets/logo.png'
import android from '../../assets/android.png'
import IOS from '../../assets/ios.png'
import { CgChevronDoubleDown } from "react-icons/cg";

const navbar = () => {
  return (
    <div className='Navbar'>
      <div className="nav-bg">
        <div className="nav">
            <video className='video' src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4" muted autoPlay loop loading="lazy"></video>
        </div>
        <div className="nav-text">
            <div className="nav-logo">
                <img height={57} src={NavLogo} alt="" />
            </div>
        </div>
        <div className="navbar-text">
            <h1>India’s #1 <br />food delivery app</h1>
        </div>
        <div className="navbar-text1">
            <h3>Experience fast & easy online ordering <br />on the Zomato app</h3>
        </div>
        <div className="logos">
            <a href=""><img className='ANDROID' height={65} src={android} alt="" /></a>
            <a href=""><img className='Ios' height={65} src={IOS} alt="" /></a>
        </div>
        <div className="scroll">
            <h3 style={{
              color:'white'
            }}>Scroll Down <span><CgChevronDoubleDown height={50}/></span></h3>
        </div> 
      </div>
    </div>
  )
}

export default navbar
