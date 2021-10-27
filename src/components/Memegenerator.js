import React, { useState, useEffect } from 'react'
//import Memegenerator from "./components/Memegenerator"

export default function Memegenerator() {
    const [topText, setTopText] = useState("One Does Not Simply")
    const [bottomText, setBottomText] = useState("Learn React")
    const [images, setImage] = useState("")

useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setImage(data.data.memes))
}, [])

function handleClick() {
    const randomNum = Math.random() * 100;
    const randomNumRoundDown = Math.floor(randomNum);
    console.log(Math.floor(randomNumRoundDown));
    const newImage = images[randomNumRoundDown].url; 
}  

    return (
        <div>
            <h1>{topText}</h1>
            <img
                src={"https:i.imgflip.com/345v97.jpg"}
                alt="random meme"
            ></img>
            <h1>{bottomText}</h1>
            {console.log(images[11].url)}
            <button
                onClick={handleClick}
            >Get New Meme!</button>
        </div>
    )
}
