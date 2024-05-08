import React, { useCallback, useEffect, useState } from 'react'
import { GetTvShowsTopRated } from '../../Service/TVshowsApiServices/GetTvShowsTopRated';
import Pagination from '../Pagination';
import { BsBookmarksFill } from "react-icons/bs";
import PercentageCircle from '../PercentageCircle';

const TopRatedTvShows = () => {
    const[ratedTv, setRatedTv]=useState([]);
    const[page,setPage]=useState(1);
    const[loder, setloder]=useState(true);
    const[watchList,setWatchList]=useState([]);


    useEffect(()=>{
      const tvshowsWatchListFromLocalStorage=localStorage?.getItem("tvshowWatchList");
      if(tvshowsWatchListFromLocalStorage){
        setWatchList(JSON.parse(tvshowsWatchListFromLocalStorage));
      }
    },[])

    useEffect(()=>{
      setloder(true);
        GetTvShowsTopRated(page)
          .then((data)=>{
            setRatedTv(data);
            setloder(false);
          })
          .catch((err)=>{
            console.error(err);
            setloder(false);
          })
    },[page]);

    const loadNextPage=()=>{
        setPage((prevPage)=>prevPage+1);
    }
    const loadPreviousPage= useCallback(()=>{
        setPage((prevPage)=>Math.max(prevPage-1,1))
    },[])

    const toogleWatchlist=useCallback((airshow)=>{
      const isInWatchlist=watchList.some((item)=>item.id === airshow.id);
      if(isInWatchlist){
        setWatchList((prevAirShow)=>{
          const filteredShow=prevAirShow?.length>0 && prevAirShow.filter((tv)=>tv.id!== airshow.id);
          localStorage.setItem("tvshowWatchList",JSON.stringify(filteredShow));
          return filteredShow;
        });
      }
      else{
        setWatchList((prevAirShow)=>{
          const newAirShow=prevAirShow?.length>0 ? [...prevAirShow,airshow] :[airshow];
          localStorage.setItem("tvshowWatchList",JSON.stringify(newAirShow));
          return newAirShow;
        })
      }
    },[watchList]);

  return (
    <div>
      {loder ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='loader'></div>
        </div>
      ):(
        <>
    <div className='bg-black'>
      <div className='text-2xl mb-8 font-bold text-center justify-center text-white'>
      Top Rated Tv Shows
        </div>
        <div className='flex flex-wrap items-center justify-center'>
          {ratedTv && 
          ratedTv?.map((rateTv)=>{
            const isInWatchlist=watchList.some(
              (item)=>item.id===rateTv.id
            );
            return(
              <div
              key={rateTv?.id}
              className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300 relative"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${rateTv?.poster_path})`,
              }}
              >
              <div className="absolute top-5 right-1 bg-gray-900 p-2 text-xl rounded-xl bg-opacity-55">
              
                {
                  !isInWatchlist?(
                    <button onClick={(e)=>{e.stopPropagation();toogleWatchlist(rateTv)}}><BsBookmarksFill style={{color: '#e2e9e8',}}/></button>
                  ):(
                    <button onClick={()=>toogleWatchlist(rateTv)}><BsBookmarksFill style={{color: '#e9fa00',}}/></button> 
                  )
                }
              </div>
              <div className='text-white text-center font-bold bg-gray-900 w-full bg-opacity-50'>
                {rateTv?.name}
              </div>
              </div>
            );
          })}
        </div>
        <Pagination
          onNext={loadNextPage}
          onPrev={loadPreviousPage}
          currPage={page}/>

    </div>
    </>
      )}
    </div>
    
    
  )
}

export default TopRatedTvShows



