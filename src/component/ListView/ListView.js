import React from "react";
import "./ListView.sass";
import ListItem from "../ListItem/ListItem";

function ListView(props) {
    const keys = Object.keys(props.contains);
    if(keys.length === 0)
        return <div className="list-view">The directory is empty!</div>;

    return <ul className="list-view">
        {
            keys
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