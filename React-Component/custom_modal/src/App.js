import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Modal from './Components/Modal';
function App() {
  const [showModal,setShowModal]=useState(false);
  const [content]=useState("Your custom message");
  return (
    <div className="App">
     <h1>Custome modal</h1>
     <button onClick={()=>{setShowModal(true)}}>Open Modal</button>
     <Modal
       showModal={showModal}
       content={content}
       handleCloseModal={()=>setShowModal(false)}
     />
    </div>
  );
}

export default App;
