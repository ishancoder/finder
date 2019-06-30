import React from "react";
import "./FileView.sass";

function FileView(props) {
    return <div>
        {props.content}
    </div>;
}

export default FileView;