import { toDoList } from '../../data.js';
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



    return(
        <>
            <div className="input-div">
                <button className="add-button" onClick = {handleClick}> + </button>
                <input className="input-text" value={newElement} onChange={handleChange}></input>
            </div>
            <ul>
                {toDoList.map(function(item, index){
                return <ListItem key = {index} text ={item} />;
            })}
            </ul>
        </>

    );
    
}