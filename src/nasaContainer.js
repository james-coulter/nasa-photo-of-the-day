import React from 'react'
import "./App.css"


const Nasa = ({title, url, date, explanation}) => {
    return (
        <div className="invisibleDiv">
        <h1>Today's Photo of the Day</h1>
        <div className="largeWrapper">
            <h4>{date}</h4>
            <h3>{title}</h3>
            <div className="imageContainer">
            <img src={url} alt=""/>
            </div>
            <p>{explanation}</p>
        </div>
        </div>
    )
}

export default Nasa