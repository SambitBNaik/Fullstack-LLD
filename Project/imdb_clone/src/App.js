import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies/Movies';
import WatchList from './Components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import TvShows from './Components/TvShows';
import People from './Components/People';
import NowPlayingMovies from './Components/Movies/NowPlayingMovies';
import UpcomingMovies from './Components/Movies/UpcomingMovies';
import TopRatedMovies from './Components/Movies/TopRatedMovies';
import TvShowsAiringToday from './Components/TvShows/TvShowsAiringToday';
import TopRatedTvShows from './Components/TvShows/TopRatedTvShows';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route
         path="/popular"
         element={
          <Fragment>
            {/* <Banner/> */}
            <Movies/>
          </Fragment>
         }>
       </Route>
       <Route path='/nowplaying' element={<NowPlayingMovies/>}></Route>
       <Route path='/upcoming' element={<UpcomingMovies/>}></Route>
       <Route path='/toprated' element={<TopRatedMovies/>}></Route>
       {/* <Route path="/watchList" element={<WatchList />}></Route> */}
       <Route path="/tvshows" element={<TvShows />}></Route>
       <Route path='/popular_people' element={<People/>}></Route>
       <Route path='/Movies_WatchList' element={<WatchList/>}></Route>
       <Route path='/airingToday' element={<TvShowsAiringToday/>}></Route>
       <Route path="/tv_top_rated" element={<TopRatedTvShows/>}></Route>
      
       </Routes>
       <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
