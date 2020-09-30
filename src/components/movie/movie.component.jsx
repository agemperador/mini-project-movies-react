import React from 'react'

import {MovieContainer} from './movie.styles'

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const setVoteClass = (vote)=>{
    if (vote>=8) return 'green'
    else if (vote>=6) return 'yellow'
    else if (vote >=4) return 'orange'
    else if (vote <5) return 'red'
    else return 'white'
   
}

const defaultImg =  'https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

const Movie = ({title,poster_path,overview,vote_average}) =>{
    
    return (
        <MovieContainer color={setVoteClass(vote_average)}>
            <img src={poster_path ? (IMG_API+ poster_path): defaultImg } alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </MovieContainer>
    )
}

export default Movie