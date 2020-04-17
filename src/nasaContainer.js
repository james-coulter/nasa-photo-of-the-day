import React from 'react'
import "./App.css"


const Nasa = ({title, url, date, explanation}) => {
    return (
        <div className="invisibleDiv" className="flex justify-center max-h-full">
        <div className="largeWrapper" className="flex flex-wrap flex-col justify-center max-w-6xl rounded-lg overflow-hidden shadow-lg m-0 bg-blue-800 p-3">
            <h4 className="flex justify-start font-bold text-2xl xs:text-2x1 md:text-5xl lg:6x1 uppercase pl-12">{title}</h4>
            <h4 className="flex justify-start font-bold text-2xl xs:text-2x1 md:text-5xl lg:6x1 uppercase pl-12 text-teal-400">{date}</h4>
            <div className="imageContainer" className="m-4" >
            <img src={url} alt=""/>
            </div>
            <div className="explanationWrapper">
            <p className="text-center">{explanation}</p>
            </div>
        </div>
        </div>
    )
}

export default Nasa