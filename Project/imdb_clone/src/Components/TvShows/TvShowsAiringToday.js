import React, { useCallback, useEffect, useState } from 'react'
import { GetTvShowsAiringToday } from '../../Service/TVshowsApiServices/GetTvShowsAiringToday';
import Pagination from '../Pagination';
import { BsBookmarksFill } from "react-icons/bs";
import "./AirShow.css";

const TvShowsAiringToday = () => {
  const[airShows,setAirShows]=useState([]);
  const[page,setPage]=useState(1);

  useEffect(()=>{
    GetTvShowsAiringToday(page)
      .then((data)=>{
        setAirShows(data);
      })
      .catch((err)=>{
        console.error(err);
      })
  },[page]);

  const loadNextPage=()=>{
    setPage((prevPage)=>prevPage+1);
  }
  const loadPrevPage=useCallback(()=>{
    setPage((prevPage)=>Math.max(prevPage-1,1))
  },[])

  return (
    <div className='bg-black'>
        <div className='text-2xl mb-8 font-bold text-center justify-center text-white'>
            TvShows Airing Today
        </div>
        <div className='flex flex-wrap items-center justify-center'>
            {airShows &&
            airShows?.map((airShow)=>{
                return(
                    <div
                    key={airShow?.id}
                    className='w-[160px] h-[30vh] bg-center rounded-xl m-4  hover:scale-110 duration-300 relative'
                    style={{
                        backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/w500/${airShow?.poster_path})`,
                    }}
                    >
                          <div className="absolute top-5 right-1 bg-gray-900 p-2 text-xl rounded-xl bg-opacity-55">
                             <button><BsBookmarksFill style={{color: '#e2e9e8',}}/></button>
                             <button><BsBookmarksFill style={{color: '#e9fa00',}}/></button>
                         </div>
                         <div className='text-white text-center font-bold bg-gray-900 w-full bg-opacity-50'>
                            {airShow?.name}
                         </div>

                    </div>
                );
            }) }
           <Pagination
          onNext={loadNextPage}
          onPrev={loadPrevPage}
          currPage={page}/>
        </div>
    </div>
    
  )
}

export default TvShowsAiringToday