import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

import Logo from './logo/Logo'
import './home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['M', 'a', 'a', 'z', ' ', 'S', 'h', 'a', 'h']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <React.Fragment>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`letterClass _12`}>i,</span>
            <br />
            <span className={`letterClass _13`}>I</span>
            <span className={`letterClass _14`}>'m</span>
            <img src={LogoTitle} alt="LogoTitle" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={24}
            />
          </h1>

          <h2>
            Full Stack Web Developer / Javascript Developer / Ruby on Rails
            Developer
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Logo />
        </div>
      </div>
      <Loader type="pacman" />
    </React.Fragment>
  )
}

export default Home
