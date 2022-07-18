
import { useState } from 'react'
  
function GetArt () {
    const [ art, setArt] = useState([])
   
    const url = `https://api.artsy.net/api/artworks/`
        
    fetch(url,{ headers:{"X-XAPP-Token":process.env.REACT_APP_KEY} } )
       .then((res) => {
         // parse JSON string into an actual JS object
         return res.json()
       })
       .then((data) => {
         // once we have the object, do stuff
         console.log('success!', data)
         setArt(data._embedded.artworks[3]._links.thumbnail.href)
        // setArt(data._embedded.artworks)

    })
       .catch((err) => {
         console.log('something went wrong...', err)
       })
   
return (
    <div className='Art-gallery'>

    <h1>You're in Get Art!</h1>
    <img src={art} alt="painting"/> 
  
{/* {art.map(artworks => (
    <div key={artworks.thumbnail} className='Gallery'>
        <img src={artworks.thumbnail.href} alt={artworks.artist.href} /> 
     </div>
))} */}



    
    </div>
)
}
export default GetArt