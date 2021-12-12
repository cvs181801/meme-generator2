import React from 'react'

export default function Box(props) {

    const boxStyles = props.on ? {border: "1px solid red", padding: ".3em", color: "white", borderRadius: "7px", backgroundColor: "black", height: "5em", width: "5em"}
    : {border: "1px solid black", padding: ".3em", color: "black", borderRadius: "7px", backgroundColor: "pink", height: "5em", width: "5em"}

    return (
        <div
            style={boxStyles}
        >
         Hello! 
        </div>
    )
}
