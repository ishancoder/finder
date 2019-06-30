import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import folderIcon from "./folder.png";
import fileIcon from "./file.png";
import "./ListItem.sass";

function ListItem(props) {
    const {name, isDirectory} = props;
    const icon = (isDirectory) ? folderIcon : fileIcon;
    return <li className="list-item" onClick={() => props.onSelect(name)}>
        <img className="icon" src={icon}/>
        <span>{name}</span>
        <span className="caret">{isDirectory ? <FontAwesomeIcon icon={faCaretRight}/> : null}</span>
    </li>
}

export default ListItem;