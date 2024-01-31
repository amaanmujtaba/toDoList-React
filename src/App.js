import './App.css';
import { toDoList } from './data.js';
import ListItem from './Components/ListItem/ListItem.jsx';
import { useState } from "react";
import Input from './Components/Input/Input.jsx';


function App() {
  const [last, setLast] = useState(false);

  function handleClick(){
    setLast(toDoList.length);
    toDoList.push("I forgot one");
    console.log(toDoList);
  }
  return (
    <div className="App">
      <h1>To Do List Application </h1>
      <div className = "Container">
      
        <Input handleClick = {handleClick}/>
        {/* This is where we will take the input + text field */}
        <ul>
          {toDoList.map(function(item, index){
            return <ListItem key = {index} text ={item} />;
          })}
          {last && <ListItem key = {last} text = {toDoList.at(last)}/>}
        </ul>

        
      </div>
    </div>
  );
}

export default App;
