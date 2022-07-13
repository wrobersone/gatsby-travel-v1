import React from 'react'
import styled from 'styled-components'
import homeImage from '../../images/hero.png'

const Hero = () => {
  return (
    <Section id='hero'>
        <div className="background">
            <img src={homeImage} alt="" />
        </div>
        <div className="content">
        <div className="title">
          <h1>be bold. travel more.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusantium voluptas eos magni illo similique dolorum, expedita excepturi ut error voluptatem.</p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">What is your Discipline?</label>
            <input type="text"  />
          </div>
          <div className="container">
            <label htmlFor="">What is your Specialty?</label>
            <input type="text"  />
          </div>
          <div className="container">
            <label htmlFor="">What is your Location?</label>
            <input type="text"  />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  )
}

export default Hero

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    margin: 1rem 2rem;
    img {
      width: 100%;
      filter: brightness(85%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3.4rem;
        font-weight: 800;
        letter-spacing: 0.2rem;
        font-family: 'FagoNo-Black', sans-serif;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          color: black;
          text-align: center;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border: none;
        border-radius: 0.3rem;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.2s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }

  @media (min-width: 200px) and (max-width: 1280px) {
    height: 25rem;
    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type='date'] {
            padding-left: 1rem;
          }
        }

        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }

  @media (min-width: 480px) and (max-width: 896px) {
    .content {
      .title {
        h1 {
          font-size: 2rem;
        }
        p {
          display: none;
        }
      }
    }
  }
`;