import React, { useState, useEffect } from 'react'

export default function Memegenerator() {
    const [topText, setTopText] = useState("One Does Not Simply")
    const [bottomText, setBottomText] = useState("Learn Hooks")
    const [image, setImage] = useState("")

// let randomNum;
// let randomNumRoundDown;
// let randomInteger;

// function getRandomNum() {
//     randomNum = Math.random() * 100;
//     randomNumRoundDown = Math.floor(randomNum);
//     randomInteger = Math.floor(randomNumRoundDown);
//     return randomInteger;
// }  

const fetchMemes = function() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => 
        //setImage(data.message)
        console.log(data.data.memes[1].url)
        )
}   

useEffect(() => {
    fetchMemes()
}, [])

    return (
        <div>
            <h1>{topText}</h1>
            <img
                src={image ? image  : "https://i.imgflip.com/4t0m5.jpg"}
                alt="random dog"
            ></img>
            <h1>{bottomText}</h1>
           
            <button
                onClick={fetchMemes}
            >Get New Meme!</button>  
        </div>
    )
}
