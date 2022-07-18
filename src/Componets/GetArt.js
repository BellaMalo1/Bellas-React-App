
import { useState, useEffect } from 'react'
  
function GetArt () {
    const [ art, setArt] = useState([])
   
    const url = `https://api.artsy.net/api/artworks/`
       
    useEffect(() => {
      fetch(url,{ headers:{"X-XAPP-Token":process.env.REACT_APP_KEY} } )
       .then((res) => {
        
         return res.json()
       })
       .then((data) => {
        
         console.log('success!', data)
        //  setArt(data._embedded.artworks[2]._links.thumbnail.href)
        setArt(data._embedded.artworks)

    })
       .catch((err) => {
         console.log('something went wrong...', err)
       })
   

    
    },[])

    useEffect(() => {
   console.log(art[0])
    },[art])
   
  if(art.length === 0) {
    return null
  }
  
    
return (
    <div className='Art-gallery'>
    <h1>You're in Get Art!</h1>
    <img src={art} alt="painting"/> 
  
{art.length > 0 && art.map(artworks => (
    <div key={artworks.thumbnail} className='Gallery'>
        <img src={artworks._links.thumbnail.href} alt={artworks._links.artists.href} /> 
     </div>
))}



    
    </div>
)
}
export default GetArt