import React, { useEffect, useState,useCallback } from 'react'
import { GetUpcomingMovies } from '../../Service/GetUpcominMovies'
import { BsBookmarksFill } from "react-icons/bs";
import Pagination from '../Pagination';

const UpcomingMovies = () => {
    const[upcomiMovies,setUpcomingMovies]=useState([]);
    const[page,setPage]=useState(1);
    useEffect(()=>{
        GetUpcomingMovies(page)
          .then((data)=>{
            setUpcomingMovies(data);
          })
          .catch((err)=>{
            console.error(err);
          })
    },[page]);
    const loadNextPageTvShows=()=>{
        setPage((prevPage)=> prevPage+1);
      }
    
      const loadPreviousPageTvShows =useCallback(()=>{
        setPage((prevPage)=>Math.max(prevPage-1,1))  
      },[])
  return (
    <div className='bg-black'>
         <div className='text-2xl mb-8 font-bold text-center justify-center text-white'>Upcoming Movies</div>
         <div className='flex flex-wrap items-center justify-center'>
            {upcomiMovies && upcomiMovies?.map((upmovie)=>{
                return(
                    <div
                    key={upmovie?.id}
                    className='w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300 relative'
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${upmovie?.poster_path})`,
                      }}
                    >
                    <div className="absolute top-5 right-1 bg-gray-900 p-2 text-xl rounded-xl bg-opacity-55">
                         <button><BsBookmarksFill style={{color: '#e2e9e8',}}/></button>
                         <button><BsBookmarksFill style={{color: '#e9fa00',}}/></button>
                     </div>
                     <div className='text-white text-center font-bold bg-gray-900 w-full bg-opacity-50'>
                         {upmovie?.title}
                     </div> 
                     <div className='text-white text-center font-bold bg-gray-900 w-full bg-opacity-50 bottom-0 left-0 absolute'>
                         {upmovie?.release_date}
                     </div> 
                    </div>
                )
            })}
             <Pagination
          onNext={loadNextPageTvShows}
          onPrev={loadPreviousPageTvShows}
          currPage={page}/>
        </div>
    </div>
   
  )
}

export default UpcomingMovies