import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'

const ResourceHero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }
    timeout.current = setTimeout(nextSlide, 5000)

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  }

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <ResourceSection>
      <ResourceWrapper>
        {slides.map((slide, index) => {
          return (
            <ResourceHeroSlide key={index}>
              {index == current && (
              <ResourceHeroSlider>
                <ResourceHeroImage src={slide.image} alt={slide.alt} />
                <ResourceHeroContent>
                  <h1>{slide.title}</h1>
                  {/* <p>{slide.price}</p> */}
                </ResourceHeroContent>
              </ResourceHeroSlider>

              )}
            </ResourceHeroSlide>
          )
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </ResourceWrapper>
    </ResourceSection>
  )
}

export default ResourceHero

const ResourceSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const ResourceWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const ResourceHeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const ResourceHeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    bottom: 0vh;
    overflow: hidden;
    opacity: 0.4;
  }
`;

const ResourceHeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const ResourceHeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 3rem);
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;


const SliderButtons = styled.div`
  bottom: 50px;
  display: flex;
  position: absolute;
  right: 50px;
  z-index: 10;
`;
const arrowButtons = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: #fff;
  background: #000d1a;
  border-radius: 50%;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  &:hover {
    background: #308b7c;
    transform: scale(1.05);
  }
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;