import React from 'react'
import Logo from "../logo.png"
import "../style.css"
import { NavLink } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <section className="homeSection">
        <nav>
          <img src={Logo} alt="logo" />
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink> </li>
              <li><NavLink to="/movies">Movies</NavLink></li>
            </ul>
          </div>
        </nav>
      </section>

    </>
  )
}

export default Home