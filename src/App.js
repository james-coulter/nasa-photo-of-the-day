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

    <div className="App" className="m-0 flex flex-col w-screen justify-center bg-gray-800 text-gray-100">
                      <div className="max-h-screen">
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    </div>
      <Alert color="primary" className="text-center">
  Welcome! This site automatically generates today's photo of the day provided by the NASA API: APOD. Feel free to change to previous dates to explore previous images.
</Alert>
      <div className="headerDiv" className="flex flex-wrap justify-center flex-col">
      <h1 className="text-6xl  my-auto mx-auto  md:mx-48 justify-center flex-wrap">astronomy photo of the day</h1>
      <h4 className="smallHeader" className="text-6xl  my-auto mx-auto  md:mx-48 justify-center text-teal-400 ">created via nasa's open api</h4>
      <form className="flex justify-center m-12" onSubmit={getSearch}>
      <input className="search" className="flex justify-center text-gray-500 text-lg" type="date" value={search} onChange={updateSearch}></input>
      <br></br>
      <Button className="search-button" className="flex justify-center p-2 px-4 ml-6" type="submit">search</Button>
      </form>
      </div>
      <Nasa title={nasaData.title} url={nasaData.url} date={nasaData.date} explanation={nasaData.explanation}/>
      <br></br>
        <br></br>
        <br></br>
    </div>
  );
}

export default App;
