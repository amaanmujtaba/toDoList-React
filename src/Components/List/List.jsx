//import { toDoList } from '../../data.js';
//import { completedList } from '../../data.js';
import ListItem from '../ListItem/ListItem.jsx';
import {useState} from "react";
import "../Input/Input.css"


export default function List(){

    const [toDoList, setToDoList] = useState([]);
    const[completedList, setCompletedList] = useState([]);
    const [newElement, setNewElement] = useState("");
    function handleChange(e){
        setNewElement(e.target.value);
    }

    const [last, setLast] = useState(ListItem.length);

    function handleClick(){
        if(newElement!==""){
            setToDoList((prevList)=> [newElement, ...prevList]);
            setNewElement("");
            console.log(toDoList);
        }
    }


    function handleToggle(index, completed){
        if (completed) {
            const task = completedList[index];
            setCompletedList((prev) => prev.filter((_, i) => i !== index));
            setToDoList((prev) => [...prev, task]);
          } else {
            const task = toDoList[index];
            setToDoList((prev) => prev.filter((_, i) => i !== index));
            setCompletedList((prev) => [...prev, task]);
          }
    }

    function handleDelete(index, completed){
        if(completed){
            const task = completedList[index];
            setCompletedList((prev) => prev.filter((_, i) => i !== index));
        }
        else{
            const task = toDoList[index];
            setToDoList((prev) => prev.filter((_, i) => i !== index));
        }

    }

    return(
        <>
            <div className="input-div">
                <button className="add-button" onClick = {handleClick}> + </button>
                <input className="input-text" value={newElement} onChange={handleChange}></input>
            </div>
            <ul>
                {toDoList.map(function(item, index){
                return <ListItem key = {`todo-${index}`}  text ={item} completed={false} 
                onToggle = {()=>handleToggle(index, false)}
                onDelete = {()=>handleDelete(index,false)} />;
            })}
            </ul>
            <ul>
                {completedList.map(function(item, index){
                return <ListItem key = {`completed-${index}`}  text ={item} completed
                    onToggle = {()=>handleToggle(index, true)}
                    onDelete = {()=>handleDelete(index,true)}
                />;
            })}
            </ul>
        </>

    );
    
}