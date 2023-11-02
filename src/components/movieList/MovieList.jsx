import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Card from "../card/Card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=a9a00ffebc7105f0a6a9cc68319b0f08`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }, [type])

  

    return (
        <div className="movie__list">
            <h2 className="list__title text-light">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map((movie) => (

                             <Card movie={movie}  key={movie.id}/>   

                          
                          




                      
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList