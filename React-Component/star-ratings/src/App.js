import logo from './logo.svg';
import './App.css';
import StarRatings from './StarRatings';

function App() {
  return (
    <div className="App">
      <h1>Star Ratings</h1>
      <h2>Start editings to see some magic happen!</h2>
      <StarRatings value={2} total={5}/>
    </div>
  );
}

export default App;
