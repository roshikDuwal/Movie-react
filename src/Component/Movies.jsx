import React from 'react'
import "../style.css"
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const { isMovies } = useGlobalContext();
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {isMovies.map((currElem) => {
            const { Title, imdbID,Poster } = currElem
            return (
              <NavLink to={`/movies/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h1>{Title}</h1>
                    <img src={Poster} alt="image" />
                  </div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </section>



    </>
  )
}

export default Movies;