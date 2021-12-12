import React, { useState, useEffect } from 'react'
import Box from './Box.js'

export default function Memegenerator() {
    const [topText, setTopText] = useState("One Does Not Simply")
    const [bottomText, setBottomText] = useState("Learn Hooks")
    const [image, setImage] = useState("")
    const [darkMode, setDarkMode] = useState(false)
    const [boxesArray, setBoxesArray] = useState(
    [
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    },   
    {
        id: 3,
        on: true
    },   
    {
        id: 4,
        on: true
    },   
    {
        id: 5,
        on: false
    },   
    {
        id: 6,
        on: false
    },   
])

const styles = 
    darkMode ? {border: "1px solid red", borderRadius: "7px", backgroundColor: "black", height: "5em", width: "5em"}
     : {border: "1px solid black", borderRadius: "7px", backgroundColor: "pink", height: "5em", width: "5em"}


let randomNum;
let randomNumRoundDown;
let randomInteger;

const newArray = boxesArray.map(box => {
    return <div key={box.id} style={styles}></div>
})

function getRandomNum() {
    randomNum = Math.random() * 100;
    randomNumRoundDown = Math.floor(randomNum);
    randomInteger = Math.floor(randomNumRoundDown);
    return randomInteger;
}  

const fetchMemes = function() {
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => 
            setImage(data.data.memes[getRandomNum()].url)
        )
}   

const handleClick = function() {
    setDarkMode(prevMode => !prevMode)
}

useEffect(() => {
    fetchMemes()
}, [])

    return (
        <div>
            <button
                onClick={handleClick}
            ></button>
            <h1>{topText}</h1>
            <img
                src={image ? image  : "https://i.imgflip.com/4t0m5.jpg"}
                alt="random meme"
            ></img>
            <h1>{bottomText}</h1>
           
            <button
                onClick={fetchMemes}
            >Get New Meme!</button>  

            {newArray}
         
        </div>
    )
}
