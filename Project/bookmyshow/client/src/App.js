import logo from './logo.svg';
import './App.css';
import Register from './Pages/Register/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css"
import "./stylesheets/form-elements.css"
import "./stylesheets/custom.css"
import "./stylesheets/theme.css"
import ProtectedRoute from './Components/ProtectedRoute';
import { useSelector } from 'react-redux';
import Admin from "./Pages/Admin/Admin";
import Profile from "./Pages/Profile/Profile"

function App() {
  const {loading}= useSelector((state)=>state.loaders);
  return ( 
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path='/' 
          element={
          <ProtectedRoute>
            <Home/>
            </ProtectedRoute>
          }/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
         </Routes>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
