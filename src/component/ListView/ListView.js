import React from "react";
import "./ListView.sass";
import ListItem from "../ListItem/ListItem";

function ListView(props) {
    return <ul className="list-view">
        {
            Object
            .keys(props.contains)
            .map(key => {
                return <ListItem
                    key={key} 
                    name={key} 
                    onSelect={props.onSelect}
                    isDirectory={typeof props.contains[key] === 'object'}/>    
            })
        }
    </ul>;
}

export default ListView;