// import React, { useEffect, useState } from 'react'
// import { GetTrendingMovies } from '../../Service/GetTrendingMovies';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const TrendingMovies = () => {
//     const [movies,setMovies]=useState([]);
//     const [page,setPage]=useState(1);

//     useEffect(()=>{
//         GetTrendingMovies(page)
//         .then((data)=>{
//             setMovies(data);
//         })
//         .catch((err)=>{
//             console.error(err);
//         })
//     },[page]);

//     const settings={
//         dots:true,
//         infinite:true,
//         slidesToShow:3,
//         slidesToScroll:3,
//         autoplay:true,
//         speed:2000,
//         autoplaySpeed:2000,
//         cssEase: "linear"
//     };
//   return (
//     <div>
//         <h1>Trending Movies Now</h1>
//         <Slider {...settings}>
//         {/* <div  style={{display:'flex', flexDirection:'col', flexWrap:'wrap'}}> */}
//             {movies.length>0? movies?.map((movie)=>{
//                 return(
//                     <div
//                     key={movie?.id}
//                     className="w-[170px] h-[35vh] bg-center bg-cover rounded-xl m-4" 
//                     style={{
//                         backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`,
//                     }}
//                     >
//                     </div>
//                 )
//             }): <p>No movies to show</p>}
//         {/* </div> */}
//         </Slider>
//     </div>
//   )
// }

// export default TrendingMovies

import React, { useEffect, useState } from "react";
import { GetTrendingMovies } from "../../Service/GetTrendingMovies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingMovie.css"

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    GetTrendingMovies(page)
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const renderSlides = () => {
    if (!movies.length) return null;

    return movies.map((movie, id) => (
      <>
        <div
          key={movie?.id}
          className="w-[170px] h-[35vh] bg-center bg-cover rounded-xl m-4"
          style={{
            backgroundImage:` url(https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`,
          }}
        ></div>
      </>
    ));
  };

  return (
    <div className="bg-black">
      <h1>Trending Movies Now</h1>
      {movies.length === 0 ? (
        <div className="flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <Slider {...settings}> {renderSlides()}</Slider>
      )}
    </div>
  );
};

export default TrendingMovies;








