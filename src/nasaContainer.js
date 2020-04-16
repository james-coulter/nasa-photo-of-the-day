import React from 'react'
import "./App.css"


const Nasa = ({title, url, date, explanation}) => {
    return (
        <div className="invisibleDiv" className="bg-gray-800 max-h-screen justify-center">
            {/* <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div> */}
        <div className="largeWrapper" className="flex flex-wrap justify-center">
            <h4 className="justify-center">{title}</h4>
            <h4>{date}</h4>
            <div className="imageContainer" className="m-0" >
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