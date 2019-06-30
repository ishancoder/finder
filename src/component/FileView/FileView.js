import React from "react";
import "./FileView.sass";

function FileView(props) {
    return <div className="file-view">
        <section className={props.content.length > 0 ? "" : "no-content"}>
            {props.content || "No-Content"}
        </section>
        <h4>{props.name}</h4>
    </div>;
}

export default FileView;