import { useEffect, useState } from 'react'
function GetArtist (){
    const [ artist, setArtist ] = useState([])

    const url = `https://api.artsy.net/api/artists`

    useEffect(() => {
        fetch(url,{ headers:{"X-XAPP-Token":process.env.REACT_APP_KEY} } )
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log('success!', data)
          setArtist(data)
     })
        .catch((err) => {
          console.log('something went wrong...', err)
        })

    },[])
    
    return(
        <>
        <form className='getArtist'>
            <input
                placeholder='Search'
                type='text'
                name='searchString'/>
            <button type='submit'>Search Artist</button>
        </form>
 
       
        </>
    )
}

export default GetArtist