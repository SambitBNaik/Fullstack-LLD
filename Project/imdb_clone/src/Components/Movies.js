import React, { useEffect,useState } from 'react';
import { GetTrendingMovies } from '../Service/GetTrendingMovies';
import Pagination from './Pagination';


const Movies = () => {
  const [movies, setMovies]= useState([]);
  const [page,setPage]=useState(1);
  useEffect(()=>{
   GetTrendingMovies(page)
    .then((data)=>setMovies(data))
    .catch((err)=>console.log(err));
  },[page]);
  const loadNextPageMovies=()=>{
    setPage(page+1);
  }

  const loadPreviousPageMovies =()=>{
    setPage(page-1);
  }
  return (
    <div>
    <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>

    <div className="flex flex-wrap">
      {movies && movies.map((movie) =>{
        return(
          <div
          key={movie?.id}
        className="w-[160px] h-[30vh] md:h-[35vh] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300" 
        style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`,}}>
          <div  className='text-white text-center font-bold bg-gray-900 w-full bg-opacity-50 rounded-xl'>{movie?.title}</div>
      </div>
      ) 
          
      })};
    </div>
    <Pagination onNext={loadNextPageMovies} onPrev={loadPreviousPageMovies} currPage={page}/>
  </div>
  ); 
}

export default Movies;