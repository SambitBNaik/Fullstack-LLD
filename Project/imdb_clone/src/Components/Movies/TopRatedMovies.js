import React, { useEffect, useState } from 'react';
import { GetTopRatedMovies } from '../../Service/GetTopRatedMovies';
import Pagination from '../Pagination';
import { BsBookmarksFill } from "react-icons/bs";

const TopRatedMovies = () => {
    const[ratedmovies,setRatedMovies]=useState([]);
    const[page,setPage]=useState(1);

    useEffect(()=>{
        GetTopRatedMovies(page)
          .then((data)=>{
            setRatedMovies(data);
          })
          .catch((err)=>{
            console.error(err);
          })
    },[page]);

  return (
    <div className='bg-black'>
        <div className='text-white justify-center text-2xl text-center'>
            Top Rated Movies
        </div>
        <div className='flex flex-wrap items-center justify-center'>
            {ratedmovies && ratedmovies?.map((topmovie)=>{
                return(
                    <div
                    key={topmovie?.id}
                    className='w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300 relative'
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${topmovie?.poster_path})`,
                      }}
                    >
                        <div className="absolute top-5 right-1 bg-gray-900 p-2 text-xl rounded-xl bg-opacity-55">
                         <button><BsBookmarksFill style={{color: '#e2e9e8',}}/></button>
                         <button><BsBookmarksFill style={{color: '#e9fa00',}}/></button>
                     </div>
                     <div className='text-white text-center font-bold bg-gray-900 w-full bg-opacity-50'>
                         {topmovie?.title}
                     </div> 
                    </div>
                )
            })}
        </div>
    </div>
    
  )
}

export default TopRatedMovies

