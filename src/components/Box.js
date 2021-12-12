import React, {useState} from 'react'

export default function Box(props) {

    const [mode, setMode] = useState({id: props.id, on: props.on})
    const [style, setStyle] = useState(mode.on ? {border: "1px solid red", padding: ".3em", color: "white", borderRadius: "7px", backgroundColor: "black", height: "5em", width: "5em"}
    : {border: "1px solid black", padding: ".3em", color: "black", borderRadius: "7px", backgroundColor: "pink", height: "5em", width: "5em"})
    

    const handleClick = function() {
        console.log("clicked!!")
        setMode(prevMode => {
            return {
            ...prevMode,
            on: !prevMode.on}})
        console.log("Mode :", mode)
        setStyle(mode.on ? {border: "1px solid red", padding: ".3em", color: "white", borderRadius: "7px", backgroundColor: "black", height: "5em", width: "5em"}
        : {border: "1px solid black", padding: ".3em", color: "black", borderRadius: "7px", backgroundColor: "pink", height: "5em", width: "5em"})
    }


    console.log("Props :", props)
    console.log("Mode.on :", mode.on)
    return (
        <div
            style={style}
            onClick={handleClick}
        >
         Hello! 
        </div>
    )
}
