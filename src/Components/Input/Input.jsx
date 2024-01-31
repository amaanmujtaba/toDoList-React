import "./Input.css";
export default function Input(props){
    return(
        <div className="input-div">
            <button className="add-button" onClick = {props.handleClick}> + </button>
            <p> here input</p>
        </div>
    )
}