import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

function App() {
  const onComplete=()=>{
    console.log("Completed");
  }
  return (
    <div className="App">
      <h1>Countdown</h1>
     <Timer experiesIn="100000" onComplete={onComplete}/>
    </div>
  );
}

export default App;
