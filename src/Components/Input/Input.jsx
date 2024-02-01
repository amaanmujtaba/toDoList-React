import "./Input.css";
import { useState } from "react";



export default function Input(props){
    const [newElement, setNewElement] = useState("");
    function handleChange(e){
        setNewElement(e.target.value);
    }
    return(
        <div className="input-div">
            <button className="add-button" onClick = {props.handleClick}> + </button>
            <input className="input-text" onChange={handleChange}></input>
        </div>
    )
}