import React from 'react'
import './MovieList.css'
import movies from '../components/data/movies.json'
import { useState } from 'react'

const MovieList = () => {

const [moviesToDisplay, setMoviestoDisplay ] = useState(movies);

const deleteMovie = (movieId)=>{
    console.log("deleting movie", movieId)

    const newListOfMovies = moviesToDisplay.filter((movie)=>{
        if(movie.id !== movieId){
            return true;
        }else{
            return false;
        }
    });
    setMoviestoDisplay (newListOfMovies);
}

    return (
        <section className='MovieList'>

            <h1>This is the movielist</h1>

            {moviesToDisplay.map((movieObj) => {
                return (
                    <div key={movieObj.id} className='card'>
                        <p>{movieObj.title}</p>
                        { movieObj.imgURL 
                            ? <img src={movieObj.imgURL} alt={movieObj.title} />
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }
                        <p>Rating: {movieObj.rating}</p>
                        <button onClick={()=>{deleteMovie(movieObj.id)}}>Delete this movie</button>
                    </div>
                )
            })}
        </section>
    )
}

export default MovieList;
