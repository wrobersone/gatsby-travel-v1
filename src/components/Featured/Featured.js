import React from 'react'
import './featured.css'
import { Button } from '../ButtonElements'


import place1 from '../../assets/images/chi1.jpg' 
import place2 from '../../assets/images/chi2.jpg' 
import place3 from '../../assets/images/chi3.jpg' 
import place4 from '../../assets/images/chi4.jpg' 
import place5 from '../../assets/images/chi5.jpg' 
import { city1, city2, city3, city4, city5 } from '../../components/Featured/index'
import { Link } from 'gatsby'

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Featured Destinations</h1>
        <p className='featured-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="container">
            <img className='span-3 image-grid-row-2' src={city1} alt="" />
            <img src={city2} alt="" />
            <img src={city3} alt="" />
            <img src={city4} alt="" />
            <img src={city5} alt="" />
            <div className="span-3 img-details">
                <div className="top">
                    <h2>Los Angeles, CA</h2>
                    <p>Top Destination</p>
                    <p className="price">$100,000</p>
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
                <Button className="btn"><Link to='/destinations'>View Location</Link></Button>
            </div>
        </div>
            
            {/* {Section section} */}

        <div className="container">
            <img className='order-2' src={place2} alt="" />
            <img className='order-3' src={place3} alt="" />
            <img className='span-3 image-grid-row-2 order-1' src={place1} alt="" />
            <img className='order-4' src={place4} alt="" />
            <img className='order-5' src={place5} alt="" />
            <div className="span-2 right-img-details order-7">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit atque vero consequatur provident</p>
                <Button className="btn"><Link to='/destinations'>View Location</Link></Button>
            </div>
            <div className="span-3 img-details order-6">
                <div className="top">
                    <h2>Chicago, IL</h2>
                    <p>Top Destination</p>
                    <p className="price">$100,000</p>
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