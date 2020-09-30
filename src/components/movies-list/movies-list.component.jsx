import React, {useEffect,useState, useContext} from 'react'

import Movie from '../movie/movie.component'

import './movies-list.styles.scss'



const MoviesList = ({movies}) =>{

    
    return (

            <div className='movies-list'>
            {
                        movies.length ? 
                                movies.map(movie=>(
                                    <Movie key={movie.id} {...movie}/>
                                )) 
                            :null 
            }
            </div>
    )

}

export default MoviesList