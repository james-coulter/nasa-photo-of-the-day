import React, {useState, useEffect} from "react";
import { Alert } from 'reactstrap';
import "./App.css";
import Nasa from './nasaContainer.js'
import styled from 'styled-components'




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


  const Button = styled.button`
  background: #FAF2A1;
  color: #453F78;
  border-radius: 10px;
  font-size: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

  return (
    <div className="App">
      <Alert color="primary">
  Welcome! This site automatically generates today's photo of the day provided by the NASA API: APOD. Feel free to change to previous dates to explore previous images.
</Alert>
      <div className="headerDiv">
      <h1>astronomy photo of the day</h1>
      <h4 className="smallHeader">created via nasa's open api</h4>
      <form onSubmit={getSearch}>
      <input className="search" type="date" value={search} onChange={updateSearch}></input>
      <br></br>
      <Button className="search-button" type="submit">search</Button>
      </form>
      </div>
      <Nasa title={nasaData.title} url={nasaData.url} date={nasaData.date} explanation={nasaData.explanation}/>
    </div>
  );
}

export default App;
