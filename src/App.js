import React, {useState, useEffect} from "react";
import "./App.css";
import Nasa from './nasaContainer.js'


function App() {
  const app_key = '080alWlQTVXU8pXOgAa97CcgGsZQmwzAdq91yfhR' 
  // const api_request = `https://api.nasa.gov/planetary/apod?api_key=${app_key}`

  // const [counter, setCounter] = useState(0)

  
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    //console.log('Effect is working')
    getAPI()
  }, [])

  const getAPI = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${app_key}`)
    const data = await response.json()
    setNasaData(data)
    console.log(data)
  }

  return (
    <div className="App">
      <Nasa title={nasaData.title} url={nasaData.url} date={nasaData.date} explanation={nasaData.explanation}/>
    </div>
  );
}

export default App;
