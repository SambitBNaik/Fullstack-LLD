import logo from './logo.svg';
import './App.css';
import Modal from './Components/Modal';
import { useState } from 'react';
import MUI_Modal from './Using_MUI/MUI_Modal';

function App() {
  const [isModalOpen, setIsModalOpen]=useState(false);

  const openModal=()=>{
    setIsModalOpen(true);
  }

  const closeModal=()=>{
    setIsModalOpen(false);
  }
  return (
    <div className="App">
      <h1>React App Example</h1>
      {/* <button onClick={openModal}>Open Modal</button>
      <Modal show={isModalOpen} handleClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is a simple model without any external libraries</p>
        <button onClick={closeModal}>Close</button>
      </Modal> */}
      <MUI_Modal/>
    </div>
  );
}

export default App;
