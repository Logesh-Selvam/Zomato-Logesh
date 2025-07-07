import React from 'react'
import './about.css'
import food1 from '../../assets/food1.png'
import food2 from '../../assets/food2.png'
import food3 from '../../assets/food3.png'
import food4 from '../../assets/food4.png'
import dispaly from '../../assets/display.png'
import phone from '../../assets/phonedisplay.png'
import plan1 from '../../assets/plan1.png'
import plan2 from '../../assets/plan2.png'
import plan3 from '../../assets/plan3.png'
import plan4 from '../../assets/plan4.png'
import wave from '../../assets/wave6.png'

const about = () => {
  return (
    <div className='about'>
      <div className="abo-col">
        <div className="abo-tex">
            <h1>What’s waiting for you <br />on the app?</h1>
        </div>
        <div className="abo-text">
            <h5>Our app is packed with features that <br />enable you to experience foo <br /> delivery like never before</h5>
        </div>
        <div className="mobile">
          <div className='mobile-menu'>
            <div className="abo-menu-icon aboone">
              <div className='doot'>
                <img height={70} src={food1} alt="" />
              </div>
              <div className='tood'>
                <h3 className='tood-text'>Healthy</h3>
              </div>
            </div>
            <div className="abo-menu-icon abotwo">
                            <div className='doot'>
                <img height={70} src={food2} alt="" />
              </div>
              <div className='tood'>
                <h3 className='tood-text'>Veg Mode</h3>
              </div>
            </div>
            <div className="abo-menu-icon abothre">
              <div className='doot'>
                <img height={70} src={food3} alt="" />
              </div>
              <div className='tood'>
                <h3 className='tood-text'>Plana Party</h3>
              </div>
            </div>
            <div className="abo-menu-icon abofour">
              <div className='doot'>
                <img height={70} src={food4} alt="" />
              </div>
              <div className='tood'>
                <h3 className='tood-text'>Gift Cards</h3>
              </div>
              {/* <div className='phone'>
                <div className='dispaly'>
                  <img className='phone-icon' height={350} src={dispaly} alt="" />
                  <div className='phone-img'>
                    <div className='doot'>
                      <img height={90} src={phone} alt="" />
                    </div>
                  <div className='tood'>
                   <h3 className='tood-text'>Schedule <br />your order</h3>
                   </div>
                  </div>
                </div>
              </div> */}

            </div>
              {/* <div className='mobile-menus'>
                <div className="khsc">
                <div className='plan-id'></div>
                <div className='plan-id'></div>
                <div className='plan-id'></div>
                <div className='plan-id'></div>
                </div>
              </div> */}

          </div>
          <div className='phone'>
                <div className='dispaly'>
                  <img className='phone-icon' height={350} src={dispaly} alt="" />
                  <div className='phone-img'>
                    <div className='doot'>
                      <img height={90} src={phone} alt="" />
                    </div>
                  <div className='tood'>
                   <h3 className='tood-text'>Schedule <br />your order</h3>
                   </div>
                  </div>
                </div>
              </div>
              <div className='mobile-menu'>
            <div className="abo-menu-icon aboone">
              <div className='doot'>
                <img height={70} src={plan1} alt="" />
              </div>
              <div className='tood'>
                <h3 className='tood-text'>Gourmet</h3>
              </div>
            </div>
            <div className="abo-menu-icon abotwo">
                            <div className='doot'>
                <img height={70} src={plan2} alt="" />
              </div>
              <div className='tood'>
                <h3 className='tood-text'>Offers</h3>
              </div>
            </div>
            <div className="abo-menu-icon abothre">
              <div className='doot'>
                <img height={70} src={plan3} alt="" />
              </div>
              <div className='tood'>
                <h3 className='tood-text'>Food on Train</h3>
              </div>
            </div>
            <div className="abo-menu-icon abofour">
              <div className='doot'>
                <img height={70} src={plan4} alt="" />
              </div>
              <div className='tood'>
                <h3 className='tood-text'>Collections</h3>
              </div>
              {/* <div className='phone'>
                <div className='dispaly'>
                  <img className='phone-icon' height={350} src={dispaly} alt="" />
                  <div className='phone-img'>
                    <div className='doot'>
                      <img height={90} src={phone} alt="" />
                    </div>
                  <div className='tood'>
                   <h3 className='tood-text'>Schedule <br />your order</h3>
                   </div>
                  </div>
                </div>
              </div> */}

            </div>
              {/* <div className='mobile-menus'>
                <div className="khsc">
                <div className='plan-id'></div>
                <div className='plan-id'></div>
                <div className='plan-id'></div>
                <div className='plan-id'></div>
                </div>
              </div> */}

          </div>
        </div>
        <div className="abo-wavws">
          <div className='about-wave'>
            <img className='wave-img' src={wave} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
