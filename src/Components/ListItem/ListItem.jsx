import './ListItem.css';
import deleteIcon from "../../deleteIcon.png";
export default function ListItem(props){
    let c = "";
    if(props.completed){
        c = "completed";
    }
    return(
        <div className = "listItem">
            <input className = "check-box" type='checkbox' id = {`todo-${props.id}`} checked = {props.completed}
                onChange={props.onToggle}
            />
            <li className = {`item`}>
                <p className = {c}>{props.text} </p>
                <button onClick = {props.onDelete}><img  className='delete-icon' src = {deleteIcon} alt='Delete Icon'/> </button>  
            </li>


        </div>
    )
}