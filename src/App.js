import './App.css';
import { toDoList } from './data.js';
import ListItem from './Components/ListItem/ListItem.jsx';
import { useState } from "react";
// import Input from './Components/Input/Input.jsx';
import List from './Components/List/List.jsx';


function App() {
  


  return (
    <div className="App">
      <h1>To Do List Application </h1>
      <div className = "Container">
        <List />
      </div>
    </div>
  );
}

export default App;
