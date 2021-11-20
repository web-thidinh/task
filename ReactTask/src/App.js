import './App.css';
import {Link } from "react-router-dom";

function App(){
  return (
    <div className="App">
      <div className="App-header">
        Counter App 
      </div>
      <Link className="App-btn" to="/counter">Get Started</Link>
    </div>
  );
}

export default App;
