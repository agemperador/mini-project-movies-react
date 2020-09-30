import React, {useState,useEffect} from 'react';
import MoviesList from './components/movies-list/movies-list.component';

import './components/header/header.styles.scss'


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"


function App() {

    
  const [searchTerm,setSeartchTerm] = useState('')
  const [fetchedMovies,setFetchedMovies] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() =>{
        fetch(FEATURED_API)
        .then(moviesResp => moviesResp.json())
        .then(data => {
            console.log(data);
            setFetchedMovies(data.results)
            setMovies(data.results)}
            )
          }
  ,[])

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (searchTerm){
      fetch(SEARCH_API+searchTerm)
      .then(searchRes => searchRes.json())
      .then(data => {
          console.log(data);
          setMovies(data.results)})

      setSeartchTerm('')
  }
  else{
    setMovies(fetchedMovies)
  }
  }

  const handleOnChange = (e)=>{
    setSeartchTerm(e.target.value);
  }


  return (
    <div>
        <header>
            <form onSubmit={handleSubmit} >
                <input 
                    className='search' 
                    type="search" 
                    placeholder='Search...'
                    vlaue={searchTerm}
                    onChange={handleOnChange}
                />
            </form>
        </header>

      <MoviesList movies={movies}/>
    </div>
  );
}

export default App;
