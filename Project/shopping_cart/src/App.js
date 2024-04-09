// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { useState } from 'react';
import {Provider} from "react-redux";
import store from "./Store/store";

function App() {
  const [cart, setCart]=useState([]);
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route path='/' element={<Home />}>  </Route>
            <Route path='/cart' element={ <Cart cart={<Cart/>}/>}> </Route>
         </Routes>   
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
