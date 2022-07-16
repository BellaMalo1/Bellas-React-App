
// import { useState } from 'react'
  
// const [ art, setArt] = useState([])

   const GetArt = function () {
    return(
        <>
        <h1>You're in Get Art</h1>
        </>
    )

    
//  const url = `https://api.artsy.net/api/artworks`
 
 
//      fetch(url,{ headers:{"X-XAPP-Token":process.env.REACT_APP_KEY} } )
//        .then((res) => {
//          // parse JSON string into an actual JS object
//          return res.json()
//        })
//        .then((data) => {
//          // once we have the object, do stuff
//          console.log('success!', data)
//          setArt(data._embedded.artworks[2]._links.thumbnail.href)
//          console.log(art)
        
 
         
       
         
//        })
//        .catch((err) => {
//          console.log('something went wrong...', err)
//        })
   }
   export default GetArt 