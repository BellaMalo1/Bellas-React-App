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
        <section>{artist.biography}</section>
        {/* <p>{artist.birthday}</p>
        <p>{artist.hometown}</p> */}
        
       
 
       
        </>
    )
}

export default GetArtist