
import React, { useEffect, useState, useContext } from "react"


 const Movie_API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`;

export const Search_Movie_API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isMovies, setIsMovies] = useState([])
    const [query, setQuery] = useState("")
    const [isSearchedMovies, setIsSearchedMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState({ show: false, msg: "" })

    useEffect(() => {
        const timeSet = setTimeout(() => {      //DEBOUNCER
            getMovies(Movie_API)
        }, 800)
        return () => clearTimeout(timeSet);
    }, [])

    useEffect(() => {
        const setTime = setTimeout(() => {
            searchedMovies(`${Search_Movie_API}&s=${query}`)
        }, 500)
        return () => clearTimeout(setTime)
    }, [query])

    const searchedMovies = async (url) => {
       
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response == "True") {
                setIsSearchedMovies(data.Search);
                setIsLoading(false);
                setIsError({
                    show:false,
                    msg:"",
                })
            } else {
                setIsError({
                    show: true,
                    msg: data.Error,
                })
                setIsSearchedMovies([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                setIsMovies(data.Search)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (<AppContext.Provider value={{ isMovies,query,isError,isLoading,setQuery,isSearchedMovies }}>{children}</AppContext.Provider>)
}


//Custom Global hooks
const useGlobalContext = () => {
    return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext };