import logo from './logo.svg';
import './App.css';
import exxplorer from './data';
import TreeView from './TreeView';

function App() {
  return (
    <div className="App">
      <h1>Tree</h1>
      {exxplorer.map((row)=>{
        return<TreeView data={row}/>
      })}
    </div>
  );
}

export default App;
