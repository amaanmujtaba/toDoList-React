import './ListItem.css';

export default function ListItem(props){
    return(
        <li className = "item">{props.text}</li>
    )
}