import React from "react";
import "./ValidationComponent.css"

const ValidationComponent = (props) =>
{
    return (
        <div className="ValidationComponent">
            <p>You Typed { props.length } characters</p>
            <p>{ props.length < 10 ? "Not enough -- keep going!" : "That's enough, you can stop now." }</p>
        </div>
    )
}

export default ValidationComponent;