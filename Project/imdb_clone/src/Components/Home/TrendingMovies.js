import React, { useEffect, useState } from 'react'
import { GetTrendingMovies } from '../../Service/GetTrendingMovies';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingMovies = () => {
    const [movies,setMovies]=useState([]);
    const [page,setPage]=useState(1);

    useEffect(()=>{
        GetTrendingMovies(page)
        .then((data)=>{
            setMovies(data);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[page]);

    const settings={
        dots:true,
        infinite:true,
        slidesToShow:6,
        slidesToScroll:1,
        autoplay:true,
        speed:2000,
        autoplaySpeed:2000,
        cssEase: "linear"
    };
  return (
    <div>
        <h1>Trending Movies Now</h1>
        <Slider {...settings}>
        <div  style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            {movies && movies?.map((movie)=>{
                return(
                    <div
                    key={movie?.id}
                    className="w-[170px] h-[35vh] bg-center bg-cover rounded-xl m-4" 
                    style={{
                        backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`,
                    }}
                    >
                    </div>
                )
            })}
        </div>
        </Slider>
    </div>
  )
}

export default TrendingMovies










