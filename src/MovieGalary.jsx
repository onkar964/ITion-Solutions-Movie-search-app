import React, {useState} from 'react'
import movieList from './movie_list'
import {Link} from 'react-router-dom'
import './MovieGalary.css'
import 'font-awesome/css/font-awesome.min.css';


const MovieGalary = () => {

    const [filteredMovies, setFilteredMovies] = useState([])

    const handleSearch=()=>{
        const inputValue = document.getElementById("inp").value.trim().toLowerCase();

        const filteredMovies = movieList.filter(movie => movie.movietitle.toLowerCase().includes(inputValue));
        setFilteredMovies(filteredMovies);      
    }

  return (
    <div>
        <div className="moviess">
            <div className='header'>
                <div>
                    <h1>Movie Galary</h1>
                </div>
                <div className='r'>
                    <input type="text" id='inp' placeholder='Search Movie name...'/>
                    <button onClick={handleSearch}><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </div>
            <hr />

            <div className="movieDisplay">
                {filteredMovies.length > 0 ?
                    filteredMovies.map(movie => (
                        <div key={movie.imdbmovieid}>
                            <Link to={`/${movie.imdbmovieid}`}>
                                <img src={movie.moviemainphotos} alt={movie.movietitle} />
                                <h2>{movie.movietitle}</h2>
                            </Link>
                        </div>
                    ))
                :
                movieList.map(movie => (
                    <div key={movie.imdbmovieid}>
                        <Link to={`/${movie.imdbmovieid}`}>
                            <img src={movie.moviemainphotos} alt={movie.movietitle} />
                            <h2>{movie.movietitle}</h2>
                        </Link>
                    </div>
                ))
                
                }
            </div>
        </div>
    </div>
  )
}

export default MovieGalary