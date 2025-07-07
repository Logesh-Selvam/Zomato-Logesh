import React from 'react'
import './member.css'
import coin from '../../assets/coin1.png'
import coin2 from '../../assets/coin2.png'
import coin3 from '../../assets/coin3.png'
import { FaStar } from "react-icons/fa6";
import free1 from '../../assets/free1.png'
import free2 from '../../assets/free2.png'
import black1 from '../../assets/black-bg2.png'
import black2 from '../../assets/black-bg1.png'
import coin4 from '../../assets/coin4.png'


const member = () => {
  return (
    <div className="">
    <div className='Members'>
      <div className="member"></div>
      <div className="meb1">
        <img className='meb' height={150} src={coin} alt=""/>
      </div>
      <div className="meb2">
        <img className='' height={250} src={coin2} alt="" />
      </div>
    <div className="member-logo">
        <div className="meb-log">
          <img height={140} src={coin3} alt="" />
        </div>
        <div className="mem-text">
           <h3>India's Top Saving <br />Program for Food Lovers</h3>
        </div>
        <div className="meb-bold">
            <h2 className='BOLD'><span className='star'><FaStar color='#A27B2F'/></span> GOLD BENEFITS <span className='star'><FaStar color='#A27B2F'/></span></h2>
        </div>
        <div className="free-oder">
            <img height={75} src={free1} alt="" />
        </div>
        <div className="free-texts">
            <h2 className='frr'>Free Delivery</h2>
            <h3 className='fee'>At all restaurants within 7 km</h3>
        </div>
        <div className="free-iconn">
            <img height={75} src={free2} alt="" />
        </div>
        <div className="free-textss">
            <h2 className='frr'>Up to 30% extra off</h2>
            <h3 className='fee'>At 20,000+ partner restaurants</h3>
        </div>
        <div className='black-img1'>
            <img height={300} src={black1} alt="" />
        </div>
        <div className='black-img2'>
            <img height={300} src={black2} alt="" />
        </div>
        <div className="last-coin">
            <img height={150} src={coin4} alt="" />
        </div>
        <div className="last-wave"></div>
    </div>
    </div>
    </div>
  )
}

export default member
