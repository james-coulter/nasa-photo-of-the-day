import React, {useState, useEffect} from "react";
import { Alert } from 'reactstrap';
import "./App.css";
import Nasa from './nasaContainer.js'



function App() {
  
  let today = new Date().toISOString().slice(0, 10)

  const app_key = '080alWlQTVXU8pXOgAa97CcgGsZQmwzAdq91yfhR' 
  // const api_request = `https://api.nasa.gov/planetary/apod?api_key=${app_key}`

  // const [counter, setCounter] = useState(0)

  
  const [nasaData, setNasaData] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState(today)


  useEffect(() => {
    //console.log('Effect is working')
    getAPI()
  }, [query])

  const getAPI = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${app_key}&date=${query}`)
    const data = await response.json()
    setNasaData(data)
    // console.log(data)
  }


  const updateSearch = e => {
    setSearch(e.target.value)
    // console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <Alert color="primary">
  Welcome! This site automatically generates today's photo of the day provided by the NASA API: APOD. Feel free to change to previous dates to explore previous images.
</Alert>
      <div className="headerDiv">
      <h1>astronomy picture of the day</h1>
      <h4 className="smallHeader">created via nasa's open api</h4>
      <form onSubmit={getSearch}>
      <input className="search" type="date" value={search} onChange={updateSearch}></input>
      <br></br>
      <button className="search-button" type="submit">search</button>
      </form>
      </div>
      <Nasa title={nasaData.title} url={nasaData.url} date={nasaData.date} explanation={nasaData.explanation}/>
    </div>
  );
}

export default App;
