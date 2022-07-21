import getartist from './GetArtist.css'
import { useEffect, useState } from 'react'


function GetArtist (){
    const [ artist, setArtist ] = useState([])
    const[searchString, setSearchString] = useState('')

    function handleChange(event){
      setSearchString(event.target.value)
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      console.log(event.target.value)

      fetch(url,{ headers:{"X-XAPP-Token":process.env.REACT_APP_KEY} } )
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log('You have artists!', data)
          setArtist(data)
          
     })
        .catch((err) => {
          console.log('something went wrong...', err)
        })
    }
    const url = `https://api.artsy.net/api/artists/${searchString}`
    return(
        <>
        
        <form className='form-horizontal' onSubmit={handleSubmit}   >
            <input 
                placeholder='Search' 
                type="text" 
                name="searchString" 
                required
                onChange={handleChange}
                value={searchString}
                />
           <button type='submit'>Search Artist</button>
        </form>
        <main className="container">
          <div className='card'>
              <div className="card-info">
                <p>{artist.biography}</p>
              </div>
                <img src={artist._links.image.href.replace('{image_version}', 'large')} alt={artist.name}/>
              <div className="card-info">
                <p>Hometown:{artist.hometown}</p>
                <span></span>
                <p>Birthday:{artist.birthday}</p>
              </div>
              <div className='card-title'>
                <h3>{searchString}</h3>
              </div>
          </div>
        </main>
      

      
       
        </>
    )
}

export default GetArtist