import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [ art, setArt] = useState([])
  

  const getArt = function () {
   
const url = `https://api.artsy.net/api/artworks?total_count=`


    fetch(url,{ headers:{"X-XAPP-Token":process.env.REACT_APP_KEY} } )
      .then((res) => {
        // parse JSON string into an actual JS object
        return res.json()
      })
      .then((data) => {
        // once we have the object, do stuff
        console.log('success!', data)
        setArt(data._embedded.artworks)
        console.log(art)
        
      
        
      })
      .catch((err) => {
        console.log('something went wrong...', err)
      })
  }
  return(
    <>
      <h1>Hello World</h1>
      <button onClick={getArt}>Get Art!</button>
      
   
     
  

    </>
      
  
  )
  }



export default App;

