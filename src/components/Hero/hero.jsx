import React from 'react'
import './hero.css'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import hero4 from '../../assets/hero4.png'
import hero5 from '../../assets/hero5.png'
import restaurants from '../../assets/restaurants.png'
import cities from '../../assets/cities.png'
import delivered from '../../assets/delivered.png'

const hero = () => {
  return (
    <div className='Heros'>
      <div className="hero">
        <div className="hero-bg">
          <img className='right-bg' src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt=""/>
        </div>
        <div className="hero-img">
          <img className='left-bg'  src="https://b.zmtcdn.com/data/o2_assets/901001826baf04838b1bf505176ff0b11742453501.png" alt="" />
        </div>
        <div className='hero-heder'>
          <h1 className='hejl'>Better food for <br />more people</h1>
          <h4 className='text'>For over a decade, we’ve enabled <br />our customers to discover new tastes, <br />delivered right to their doorstep</h4>
        </div>
        <span className='veg-icon'>
          <img className='img1' height={40} src={hero1} alt="" />
        </span><span>
          <img className='img2' height={200} src={hero2} alt="" />
        </span>
        <span>
          <img className='img3' height={40} src={hero3} alt="" />
        </span>
        <span>
          <img className='img4' height={200} src={hero4} alt="" />
        </span>
        <span>
          <img className='img5' height={250} src={hero5} alt="" />
        </span>
        <span>
          <img className='img6' height={40} src={hero3} alt="" />
        </span>
        <div className="hero-box">
          <div className="food">
            <div className="box1">
              <div>
                <div className='hero-count'>3,00,000+</div>
                <div className='hero-count'>restaurants</div>
              </div>
              <div className='hero-rest'>
                <img height={60} src={restaurants} alt="" />
              </div>
            </div>
            <span className='hero-line'></span>
            <div className="box1">
              <div className='hero-count'>
                <div>800+</div>
                <div>cities</div>
              </div>
              <div className='hero-rest'>
                <img height={60} src={cities} alt="" />
              </div>
            </div>
            <span className='hero-line'></span>
            <div className="box1">
              <div className='hero-count'>
                <div>3 billion+</div>
                <div>orders delivered</div>
              </div>
              <div className='hero-rest'>
                <img height={60} src={delivered} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero
