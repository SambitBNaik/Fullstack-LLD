import logo from './logo.svg';
import './App.css';
import useTheme from './hooks/useTheme';
import "./styles.css";

function App() {
  const {theme, toggleTheme}= useTheme();
  return (
    <div className="App">
     <h1>Dark and Light Theme</h1>
     <h1>{theme}</h1>
     <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
