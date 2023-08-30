import React from 'react'
import "../style.css"
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom'


const Search = () => {
  const { query, isError, setQuery, isSearchedMovies } = useGlobalContext();



  return (
    <>
      <section className="SearchSection">
        <div className="Container">
          <h1>MovieHUB</h1>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search here" value={query} onChange={(e) => setQuery(e.target.value)} />
          </form>
        </div>
        <div className="error">
          {query === "" ? "Enter a Movie Name" : <p>{isError.show && isError.msg}</p>}

        </div>
      </section>

      <section className="movie-page">
        <div className="container grid grid-4-col">
          {isSearchedMovies.map((currElem) => {
            const { Title, imdbID, Poster } = currElem
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

export default Search