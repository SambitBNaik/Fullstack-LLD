import React, { useState } from 'react';
import logo from "../Assets/MovieLogo.png"
import { Link } from 'react-router-dom';
import Modal from './Modal';
import  styled  from 'styled-components';

const NavBarOptions = styled.div`
  display:none;
  @media screen and (min-width: 600PX) {
    display:flex;

  }
`;
const ButtonWrapper = styled.div`
  position:relative;
`;

const DropDownOptions = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  right:50%;
  top:100%;
  background-color:red;
  z-index:100;
  width:100px;
`;


const Navbar = () => {
  const[showMoviesDropdown, setShowMoviesDropdown]= useState(false);
  const[showPeopleDropdown, setShowPeopleDropdown]= useState(false);
  const[showMovieWatchListDropdown,setShowMovieWatchListDropdown]=useState(false);
  const[tvshowsDropDown,setTvShowsDropDown]=useState(false);
  return (
    <>

  <div className="flex justify-between items-center p-3 py-4  bg-slate-800">
      <div className="flex items-center" style={{display:'contents'}} x-data="{navbarOpen: false}">
        <Link to="/">
          <img src={logo} className="w-12 h-12 rounded-full" alt="Movie Logo"/>
        </Link>
        <ButtonWrapper onBlur={() => setNavbarOpen(false)} >
        <button
          class="inline-flex items-center justify-center w-10 h-10 ml-auto text-white border rounded-md outline-none  lg:hidden focus:outline-none"
          onClick={()=>setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <DropDownOptions style={{display: `${navbarOpen ? 'block' : 'none'}`}}>
        <div>
        <div className='relative ml-4'
             onMouseEnter={()=>setShowMoviesDropdown(true)}
             onMouseLeave={()=>setShowMoviesDropdown(false)}
        >
            <span className='text-white font-bold cursor-pointer'>Movies</span>
            {showMoviesDropdown && (
            <div className='absolute w-[160px]  top-full left-0  bg-white text-gray p-2 rounded shadow z-10' onMouseEnter={()=>setShowMoviesDropdown(true)}>
              <Link to="/popular" className='block py-1 px-2  hover:bg-slate-300'>Popular</Link>
              <Link to="/nowplaying" className='block py-1 px-2 hover:bg-slate-300'>Now Playing</Link>
              <Link to="/upcoming" className='block py-1 px-2 hover:bg-slate-300'>Upcoming</Link>
              <Link to="/toprated" className='block py-1 px-2  hover:bg-slate-300'>Top Rated</Link>
            </div>
          )}
        </div>
        <div className='relative ml-4'
              onMouseEnter={()=>setTvShowsDropDown(true)}
              onMouseLeave={()=>setTvShowsDropDown(false)}
        >
             <spna className='text-white font-bold cursor-pointer'>TV Shows</spna>
             {tvshowsDropDown && (
              <div className='absolute w-[160px] top-full left-0 bg-white text-gray p-2 rounded shadow z-10' onMouseEnter={()=>setTvShowsDropDown(true)}>
                <Link to="/tvshows" className='block py-1 px-2 hover:bg-slate-300'>Popular</Link>
                <Link to="/airingToday" className='block py-1 px-2 hover:bg-slate-300'>Airing Today</Link>
                <Link to="/tv_top_rated" className='block py-1 px-2 hover:bg-slate-300'>Top Rated</Link>
              </div>
             )}
        </div>
        <div className='relative ml-4'
             onMouseEnter={()=>setShowPeopleDropdown(true)}
             onMouseLeave={()=>setShowPeopleDropdown(false)}
        >
          <span className='text-white font-bold cursor-pointer'>People</span>
          {showPeopleDropdown && (
            <div className='absolute w-[160px] top-full left-0 bg-white text-gray p-2 rounded shadow  z-10' onMouseEnter={()=>setShowPeopleDropdown(true)}>
              <Link to="/popular_people" className='block py-1 px-2 hover:bg-slate-300'>Popular People</Link>
            </div>
          )}
        </div>
        <div className='relative ml-4'
             onMouseEnter={()=>setShowMovieWatchListDropdown(true)}
             onMouseLeave={()=>setShowMovieWatchListDropdown(false)}
        >
          <span className='text-white font-bold cursor-pointer'>WatchList</span>
         {showMovieWatchListDropdown && (
           <div className='absolute w-[190px] top-full left-0 bg-white text-gray p-2 rounded z-10' onMouseEnter={()=>setShowMovieWatchListDropdown(true)}>
           <Link to="/Movies_WatchList" className='block py-1 px-2 hover:bg-slate-300'>Movies WatchList</Link>
           <Link to="/TvShows_WatchList" className='block py-1 px-2 hover:bg-slate-300'>Tv Shows WatchList</Link>
         </div>
         )}
        </div>
        </div>
        </DropDownOptions>
        </ButtonWrapper>
        <NavBarOptions>
        <div className='relative ml-4'
             onMouseEnter={()=>setShowMoviesDropdown(true)}
             onMouseLeave={()=>setShowMoviesDropdown(false)}
        >
            <span className='text-white font-bold cursor-pointer'>Movies</span>
            {showMoviesDropdown && (
            <div className='absolute w-[160px]  top-full left-0  bg-white text-gray p-2 rounded shadow z-10' onMouseEnter={()=>setShowMoviesDropdown(true)}>
              <Link to="/popular" className='block py-1 px-2  hover:bg-slate-300'>Popular</Link>
              <Link to="/nowplaying" className='block py-1 px-2 hover:bg-slate-300'>Now Playing</Link>
              <Link to="/upcoming" className='block py-1 px-2 hover:bg-slate-300'>Upcoming</Link>
              <Link to="/toprated" className='block py-1 px-2  hover:bg-slate-300'>Top Rated</Link>
            </div>
          )}
        </div>
        <div className='relative ml-4'
              onMouseEnter={()=>setTvShowsDropDown(true)}
              onMouseLeave={()=>setTvShowsDropDown(false)}
        >
             <spna className='text-white font-bold cursor-pointer'>TV Shows</spna>
             {tvshowsDropDown && (
              <div className='absolute w-[160px] top-full left-0 bg-white text-gray p-2 rounded shadow z-10' onMouseEnter={()=>setTvShowsDropDown(true)}>
                <Link to="/tvshows" className='block py-1 px-2 hover:bg-slate-300'>Popular</Link>
                <Link to="/airingToday" className='block py-1 px-2 hover:bg-slate-300'>Airing Today</Link>
                <Link to="/tv_top_rated" className='block py-1 px-2 hover:bg-slate-300'>Top Rated</Link>
              </div>
             )}
        </div>
        <div className='relative ml-4'
             onMouseEnter={()=>setShowPeopleDropdown(true)}
             onMouseLeave={()=>setShowPeopleDropdown(false)}
        >
          <span className='text-white font-bold cursor-pointer'>People</span>
          {showPeopleDropdown && (
            <div className='absolute w-[160px] top-full left-0 bg-white text-gray p-2 rounded shadow  z-10' onMouseEnter={()=>setShowPeopleDropdown(true)}>
              <Link to="/popular_people" className='block py-1 px-2 hover:bg-slate-300'>Popular People</Link>
            </div>
          )}
        </div>
        <div className='relative ml-4'
             onMouseEnter={()=>setShowMovieWatchListDropdown(true)}
             onMouseLeave={()=>setShowMovieWatchListDropdown(false)}
        >
          <span className='text-white font-bold cursor-pointer'>WatchList</span>
         {showMovieWatchListDropdown && (
           <div className='absolute w-[190px] top-full left-0 bg-white text-gray p-2 rounded z-10' onMouseEnter={()=>setShowMovieWatchListDropdown(true)}>
           <Link to="/Movies_WatchList" className='block py-1 px-2 hover:bg-slate-300'>Movies WatchList</Link>
           <Link to="/TvShows_WatchList" className='block py-1 px-2 hover:bg-slate-300'>Tv Shows WatchList</Link>
         </div>
         )}
        </div>
        </NavBarOptions>
      </div>
      
    </div></>
  )
}
export default Navbar;



