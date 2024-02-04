import { toDoList } from '../../data.js';
import { completedList } from '../../data.js';
import ListItem from '../ListItem/ListItem.jsx';
import {useState} from "react";
import "../Input/Input.css"


export default function List(){


    const [newElement, setNewElement] = useState("");
    function handleChange(e){
        setNewElement(e.target.value);
    }

    const [last, setLast] = useState(ListItem.length);

    function handleClick(){
        setLast(toDoList.length+1);
        toDoList.push(newElement);
        setNewElement("");
        console.log(toDoList);
    }

    function handleToggle(index, completed){
        if(completed){
            const task = completedList[index];
           // setCompletedList((prev) => prev.filter((_, i) => i !== index));
            completedList.splice(index,1);
            //setToDoList((prev) => [...prev, task]);
            toDoList.push(task);
            setLast(toDoList.length);

        }
        else{
            const task = toDoList[index];
            toDoList.splice(index,1);
            completedList.push(task);
            setLast(toDoList.length);
            console.log(toDoList)
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
                return <ListItem key = {`todo-${index}`}  text ={item} onToggle = {()=>handleToggle(index, false)} />;
            })}
            </ul>
            <ul>
                {completedList.map(function(item, index){
                return <ListItem key = {`completed-${index}`}  text ={item} completed
                    onToggle = {()=>handleToggle(index, true)}
                />;
            })}
            </ul>
        </>

    );
    
}