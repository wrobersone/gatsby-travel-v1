import React from 'react'
import './featured.css'
import { Button } from '../ButtonElements'


import place1 from '../../assets/images/chi1.jpg' 
import place2 from '../../assets/images/chi2.jpg' 
import place3 from '../../assets/images/chi3.jpg' 
import place4 from '../../assets/images/chi4.jpg' 
import place5 from '../../assets/images/chi5.jpg' 

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Featured Destinations</h1>
        <p className='featured-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam quae molestias cupiditate quaerat unde voluptates</p>
        <div className="container">
            <img className='span-3 image-grid-row-2' src={place1} alt="" />
            <img src={place2} alt="" />
            <img src={place3} alt="" />
            <img src={place4} alt="" />
            <img src={place5} alt="" />
            <div className="span-3 img-details">
                <div className="top">
                    <h2>City, State</h2>
                    <p>Top Destination</p>
                    <p className="price">Cost of Living $100,000</p>
                </div>
                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className='bold'>Places to Eat:</p><p>54</p>
                        </div>
                        <div className="info">
                            <p className='bold'>Things to Do:</p><p>54</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className='bold'>Places to Eat:</p><p>54</p>
                        </div>
                        <div className="info">
                            <p className='bold'>Things to Do:</p><p>54</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="span-2 right-img-details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit atque vero consequatur provident, dolorum esse tempore aut aspernatur hic quasi delectus saepe porro architecto sunt natus vitae nam quos?</p>
                <Button className="btn">View Location</Button>
            </div>
        </div>
            
            {/* {Section section} */}

        <div className="container">
            <img src={place2} alt="" />
            <img src={place3} alt="" />
            <img className='span-3 image-grid-row-2' src={place1} alt="" />
            <img src={place4} alt="" />
            <img src={place5} alt="" />
            <div className="span-2 right-img-details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit atque vero consequatur provident</p>
                <Button className="btn">View Location</Button>
            </div>
            <div className="span-3 img-details">
                <div className="top">
                    <h2>City, State</h2>
                    <p>Top Destination</p>
                    <p className="price">Cost of Living $100,000</p>
                </div>
                <div className="info-grid">
                    <div>
                        <div className="info">
                            <p className='bold'>Places to Eat:</p><p>54</p>
                        </div>
                        <div className="info">
                            <p className='bold'>Things to Do:</p><p>54</p>
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <p className='bold'>Places to Eat:</p><p>54</p>
                        </div>
                        <div className="info">
                            <p className='bold'>Things to Do:</p><p>54</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Featured