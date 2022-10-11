import './App.css';
import Dropdown from "./Components/Dropdown"
import Weather from "./Components/Weather"

function App() { 
  return (
    <div className="App">
      <div className="container">
        <Dropdown/>
        <Weather/>
      </div>
    </div>
  );
}

export default App;
