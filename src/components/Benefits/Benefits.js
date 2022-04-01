import React from 'react'

import Benefit1 from '../../assets/images/OSMIcons.png'
import Benefit2 from '../../assets/images/OSMIcons2.png'
import Benefit3 from '../../assets/images/OSMIcons3.png'
import Benefit4 from '../../assets/images/OSMIcons4.png'

import Benefit5 from '../../assets/images/OSMIcons5.png'
import Benefit6 from '../../assets/images/OSMIcons6.png'
import Benefit7 from '../../assets/images/OSMIcons7.png'
import Benefit8 from '../../assets/images/OSMIcons8.png'

import './benefits.css'

const Benefits = () => {
  return (
    <div className='benefits'>
        <h1>Explore Our Benefits</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agricultural</p>
        </div>
        <div className="container">
            <img src={Benefit1} alt="" />
            <img src={Benefit2} alt="" />
            <img src={Benefit3} alt="" />
            <img src={Benefit4} alt="" />
        </div>
        <div className="container">
            <img src={Benefit5} alt="" />
            <img src={Benefit6} alt="" />
            <img src={Benefit7} alt="" />
            <img src={Benefit8} alt="" />
        </div>
    </div>
  )
}

export default Benefits