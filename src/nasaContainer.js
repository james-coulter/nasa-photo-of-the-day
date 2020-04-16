import React from 'react'
import "./App.css"


const Nasa = ({title, url, date, explanation}) => {
    return (
        <div className="invisibleDiv">
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
        <div className="largeWrapper">
            <h4>{title}</h4>
            <h4>{date}</h4>
            <div className="imageContainer">
            <img src={url} alt=""/>
            </div>
            <div className="explanationWrapper">
            <p>{explanation}</p>
            </div>
        </div>
        </div>
    )
}

export default Nasa