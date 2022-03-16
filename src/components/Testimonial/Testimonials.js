import React from 'react'
import styled from 'styled-components'
import avatarImage from '../../assets/images/avatarImage.jpeg'

export default function Testimonials() {
  return (
    <Section id='testimonials'>
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus a ipsum rem, corrupti repellat in quas ut molestias, facilis enim ipsa voluptatum vel suscipit nulla? Sit repudiandae dolor impedit voluptate?</p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>  
        </div>
        <div className="testimonial">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus a ipsum rem, corrupti repellat in quas ut molestias, facilis enim ipsa voluptatum vel suscipit nulla? Sit repudiandae dolor impedit voluptate?</p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>  
        </div>
        <div className="testimonial">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus a ipsum rem, corrupti repellat in quas ut molestias, facilis enim ipsa voluptatum vel suscipit nulla? Sit repudiandae dolor impedit voluptate?</p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>  
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
    h2 {
      font-family: 'FagoNo-Black', sans-serif;
      font-size: 2rem;
    }
  }
  .testimonials {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 0 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          height: 3rem;
          border-radius: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media (min-width: 200px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`