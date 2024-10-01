import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs';
import { tabsData } from './data';

function App() {
  return (
    <div className="App">
      <h1>TABS</h1>
      <Tabs currentIndex={0} tabsData={tabsData}/>
    </div>
  );
}

export default App;
