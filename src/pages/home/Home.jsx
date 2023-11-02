

import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";


const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=a9a00ffebc7105f0a6a9cc68319b0f08"
        )
          .then((res) => res.json())
          .then((data) => setPopularMovies(data.results.slice(0, 1))); // Limit to the top 3 movies
    }, []);
    
    return (
        <>
            <div className="poster">
            <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
      {popularMovies.map((movie, index) => (
        <div key={index}>
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie.backdrop_path
              }`}
              alt={movie.original_title}
              key={movie.id}
            />
            <p className="legend">{movie.original_title}</p>
          </Link>
        </div>
      ))}
    </Carousel>
<MovieList />
            </div>
        </>
    )
}

export default Home