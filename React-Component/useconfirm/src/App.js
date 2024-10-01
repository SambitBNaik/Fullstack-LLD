import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import useCoinfirm from './useCoinfirm';

function App() {
  const {triggerConfirm, ConfirmDialog}=useCoinfirm();
  const [deleteMessage, setDeleteMessage]= useState(false);

  const handleDelete=async()=>{
    const deleteText= await triggerConfirm("Do you want to delete it?");
    console.log(deleteText);
    setDeleteMessage(deleteText);
  }
  return (
    <div className="App">
      <h1>Window.Confirm</h1>
      <button onClick={handleDelete}> Delete</button>
      <p>{deleteMessage ? "Confirmed" : "Not yet"}: Delete this text</p>
     <ConfirmDialog/>
    </div>
  );
}

export default App;
