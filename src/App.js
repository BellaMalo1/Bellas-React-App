// import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home';
import GetArt from './Componets/GetArt';
import GetArtist from './Componets/Get.Artist';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
 
  return(
    <>
    <nav>
    <Link to="/">
      <h1>Home</h1>
    </Link>
    <Link to='/Explore-Artworks'>
      <h1>Explore Artworks</h1>
    </Link>
    <Link to='/Explore-Artists'>
      <h1>Explore Artists</h1>
    </Link>
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Explore-Artworks" element={<GetArt/>}/>
        <Route path='/Explore-Artists' element={<GetArtist />}/>
      </Routes>
    </main>

    
     
    </>
      
  
  )
  }



export default App;

