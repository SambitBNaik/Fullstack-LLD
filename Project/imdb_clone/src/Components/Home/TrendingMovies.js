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

import React, { useCallback, useEffect, useState } from "react";
import { GetTrendingMovies } from "../../Service/GetTrendingMovies";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingMovie.css";
import { BsBookmarksFill } from "react-icons/bs";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const watchListFromLocalStorage = localStorage?.getItem("movieWatchList");
    if (watchListFromLocalStorage) {
      setWatchList(JSON.parse(watchListFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    GetTrendingMovies(page)
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  const toogleWatchlist = useCallback(
    (movie) => {
      const isMovieInWatchlist = watchList.some((item) => item.id === movie.id);
      if (isMovieInWatchlist) {
        setWatchList((prevMoviesList) => {
          const filteredMovies =
            prevMoviesList?.length > 0 &&
            prevMoviesList.filter((m) => m.id !== movie.id);
          localStorage.setItem(
            "movieWatchList",
            JSON.stringify(filteredMovies)
          );
          return filteredMovies;
        });
      } else {
        setWatchList((prevMoviesList) => {
          const newMoviesList =
            prevMoviesList?.length > 0 ? [...prevMoviesList, movie] : [movie];
          localStorage.setItem("movieWatchList", JSON.stringify(newMoviesList));
          return newMoviesList;
        });
      }
    },
    [watchList]
  );

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

    return movies.map((movie, id) => {
      const isInWatchlist = watchList.some((item) => item.id === movie.id);
      return (
        <div className="">
          <div
            key={movie?.id}
            className="w-[170px] h-[50vh] bg-center bg-cover rounded-xl m-8"
            style={{
              backgroundImage: ` url(https://image.tmdb.org/t/p/original/t/p/w500/${movie?.poster_path})`,
            }}
          >
            {!isInWatchlist ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toogleWatchlist(movie);
                }}
              >
                <BsBookmarksFill style={{ color: "#e2e9e8" }} />
              </button>
            ) : (
              <button
                onClick={() => {
                  toogleWatchlist(movie);
                }}
              >
                <BsBookmarksFill style={{ color: "#e9fa00" }} />
              </button>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-black">
      <h1>Trending Movies Now</h1>
      {movies.length === 0 ? (
        <div className="flex justify-center items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <Slider className={"slick-custom-class"} {...settings}>
          {" "}
          {renderSlides()}
        </Slider>
      )}
    </div>
  );
};

export default TrendingMovies;
