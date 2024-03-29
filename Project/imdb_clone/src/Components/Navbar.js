import React from 'react';
import logo from "../Assets/MovieLogo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (<div className="flex space-x-8 items-center pl-3 py-4 border">
      <img  src={logo} className="w-[60px]"/>
      {/* <a href="/"><h3 className="text-blue-400">Movies</h3></a>
      <a href="/watchlist"><h3 className="text-blue-400">WatchList</h3></a> */}

      <Link to="/"><h3 className="text-blue-400">Movies</h3></Link>
      <Link to="/watchlist"><h3 className="text-blue-400">WatchList</h3></Link>
    </div>
  )
}

export default Navbar;