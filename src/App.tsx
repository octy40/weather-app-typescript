import React from 'react';
import './App.css';
import Day from './components/day/day';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Weather</p>
        <input type="text" placeholder="Enter city"/>
        <button>Submit</button>
      </header>      
      <Day day='Tuesday' dayMaxTemperature={50} dayMinTemperature={8}/>
      <Day day='Wednesday' dayMaxTemperature={50} dayMinTemperature={8}/>
      <Day day='Thursday' dayMaxTemperature={50} dayMinTemperature={8}/>
      <Day day='Friday' dayMaxTemperature={50} dayMinTemperature={8}/>
      <Day day='Saturday' dayMaxTemperature={50} dayMinTemperature={8}/>
    </div>
  );
}

export default App;
