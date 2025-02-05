import React from 'react'
import './MovieList.css'
import movies from '../components/data/movies.json'

const MovieList = () => {

    return (
        <section className='MovieList'>

            <h1>This is the movielist</h1>

            {movies.map((movieObj) => {
                return (
                    <div key={movieObj.id} className='card'>
                        <p>{movieObj.title}</p>
                        <img src={movieObj.imgURL} alt={movieObj.title} />
                        <p>{movieObj.rating}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default MovieList;
