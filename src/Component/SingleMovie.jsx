import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Search_Movie_API } from './Context'
import "../style.css"
import { Link } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams();

  const [isMovies, setIsMovies] = useState("")
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    const timeSet = setTimeout(() => {      //DEBOUNCER
      getMovies(`${Search_Movie_API}&i=${id}`)
    }, 800)
    return () => clearTimeout(timeSet);
  }, [id])


  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response == "True") {
        setIsMovies(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }


  return (
    <section className="SearchSection">
      <div className="Container">
        <div className="Card">
          <img src={isMovies.Poster} alt="image" />
          <div className="box">
            <h1>{isMovies.Title}</h1>
            <h3>{isMovies.Released}</h3>
            <h3>{isMovies.Type}</h3>
            <h3>{isMovies.imdbRating}</h3>
            <Link to="/">Go Back</Link>
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default SingleMovie