import React from 'react'
import styled from 'styled-components'
import service1 from '../../assets/images/service1.png'
import service2 from '../../assets/images/service2.png'
import service3 from '../../assets/images/service3.png'
import service4 from '../../assets/images/service4.png'

export default function Services() {
    const data = [
        {
          icon: service1,
          title: "Get Best Prices",
          subTitle:
            "Pay through our application and save thousands and get amazing rewards.",
        },
        {
          icon: service2,
          title: "Covid Safe",
          subTitle:
            "We have all the curated hotels that have all the precaution for a covid safe environment.",
        },
        {
          icon: service3,
          title: "Flexible Payment",
          subTitle:
            " Enjoy the flexible payment through our app and get rewards on every payment.",
        },
        {
          icon: service4,
          title: "Find The Best Near You",
          subTitle:
            "Find the best hotels and places to visit near you in a single click.",
        },
      ];

  return (
    <Section id="services">
      {
        data.map((service) => {
          return (
            <div className="service">
              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          )
        })
      }
    </Section>
  )
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: antiquewhite;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }

  @media (min-width: 200px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media (min-width: 720px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
