import React from 'react'
import './download.css'
import elite from '../../assets/elite.png'
import android from '../../assets/android.png'
import iOS from '../../assets/ios.png'
import display from '../../assets/display.png'
import QR from '../../assets/qr-code.png'

const download = () => {
  return (
    <div className='eternal'>
      <div className="elite-logo">
        <div className="eternals">
          <img height={171} src={elite} alt=""/>
        </div>
        <h2 className='elite-text'><span className='elite-line'></span>P O W E R , I N G I N D I A’S<br />C H A N G I N G_L I F E S T Y L E S <span className='elite-lines'></span></h2>
        <div className="card">
          <div className='Box-card1'>
            <div className="company-logo"></div>
            <div className="companu-name">
              <h2>zomato</h2>
            </div>
            <div className="companu-text">
              <h4>Get the app now to <br />start ordering your <br />favorite dishes!</h4>
            </div>
            <div className="check">
              <h4>Check it out <span></span></h4>
            </div>
          </div>
          <div className='Box-card2'>
             <div className="company-logoo"></div>
            <div className="companu-name">
              <h2>blinkit</h2>
            </div>
            <div className="companu-text">
              <h4>Choose from 10,000+ <br />products & get them <br />delivered in minutes</h4>
            </div>
            <div className="check">
              <h4>Check it out <span></span></h4>
            </div>
          </div>
          <div className='Box-card3'>
             <div className="company-logooo"></div>
            <div className="companu-name">
              <h2>district</h2>
            </div>
            <div className="companu-text">
              <h4>The best of events, <br />movies, dining, and <br />everything you love!</h4>
            </div>
            <div className="check">
              <h4>Check it out <span></span></h4>
            </div>
          </div>
          <div className='Box-card4'>
             <div className="company-logoooo"></div>
            <div className="companu-name">
              <h2>hyperpure</h2>
            </div>
            <div className="companu-text">
              <h4>Offering complete <br />supply chain solution <br />for your restaurant</h4>
            </div>
            <div className="check">
              <h4>Check it out <span></span></h4>
            </div>
          </div>
        </div>
        <div className="sec-card">
          <div className='sec-tect'>
            <div className="cord-text"><h1>Download the app now!</h1></div>
            <div className="co-text">Experience seamless online ordering <br /> only on the Zomato app</div>
            <div className="sec-icon">
              <div>
                <img className='sce-io' height={55} src={android} alt="" />
              </div>
              <div>
                <img className='sec-iep' height={55} src={iOS} alt="" />
              </div>
            </div>
          </div>
          <div className='sec-phoneQR'>
            <div className="card-phone-icon">
              <img height={450} src={display} alt="" />
              <div className="card-msg">
              <div className="card-msg-qr">Scan the QR code to <br />download the app</div>
              <div className="card-qr">
                <img height={180} src={QR} alt="" />
              </div>
            </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default download
