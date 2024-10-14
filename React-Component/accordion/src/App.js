import logo from './logo.svg';
import './App.css';
import questions from './data';
import Accordion from './Accordion';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Accordion</h1>
      {questions.map((question)=>{
        return <Accordion {...question}/>
      })}
    </div>
  );
}

export default App;
