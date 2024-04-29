import React from 'react'
import { useParams } from 'react-router-dom'
import movieList from './movie_list'
import './d.css'

const Display = () => {

    const {id} =useParams();
    const movie =movieList.find(movie => movie.imdbmovieid === id)
    if(!movie){
        return <div>Movie not found</div>;
    }

  return (
    <div className='main'>
        <h1>Movie</h1>
          <div className='MovieDisplay'>
            <div className='l'>
              <img src={movie.moviemainphotos} alt={movie.movietitle} />
            </div>
            <div className='r'>
              <p><strong>Name:</strong> {movie.movietitle}</p>
              <p><strong>Movie Languages:</strong> {movie.movielanguages}</p>
              <p><strong>Movie Countries:</strong> {movie.moviecountries}</p>
              <p><strong>Movie Genres:</strong> {movie.moviegenres}</p>
            </div>
          </div>
    </div>
  )
}

export default Display