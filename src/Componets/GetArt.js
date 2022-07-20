
import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
  
function GetArt () {
    const [ art, setArt] = useState([])
    let newURl 
   
    const url = `https://api.artsy.net/api/artworks`

    useEffect(() => {
      fetch(url,{ headers:{"X-XAPP-Token":process.env.REACT_APP_KEY} } )
       .then((res) => {
        
         return res.json()
       })
       .then((data) => {
        
         console.log('You have Art Work!', data)
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

  if(art.length > 0 ){
    newURl = art[0]._links.image.href
    newURl = newURl.replace('{image_version}', 'large')
    console.log(newURl)
  }
  
return (
  <Carousel style={{ minHeight: '90vh' }}>
    {art.length > 0 && art.map(artworks => {
      return (
        <Carousel.Item key={artworks.id} style={{ maxHeight: '90vh' }}>
          <img
            className='d-block w-100'
            style={{
              height: '90vh',
              width: '100%',
              objectFit: 'cover',
              overflow: 'hidden',
            }}
            src={artworks._links.thumbnail.href}
            // src={artworks._links.image.href, large)}
            alt={artworks._links.artists.href}
          />
          <Carousel.Caption>
          <p>{artworks.title}</p>
            <p>{artworks.medium}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    })}
  </Carousel>
);
  }


export default GetArt