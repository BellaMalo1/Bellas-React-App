import home from './Home.css'
function Home (){
    return(
    <body>
    <div className='Welcome-container'>
         <img className="welcome-image" src={require('./article_topimage_michelangelo.jpeg')}alt="Michaelangelo's breath of live"></img>
        <h1 className="welcome-message">Welcome To Art Crawl</h1>
        <section className="info-message">
        <h2>This simple appliction is powered by Artsy API and was created as a way for art lovers to have easy access to some of their favorite works from a variety of different Art movements! Please explore the gallery tab for some famous works and find your way to the Artist tab to search some Artist that interest you!</h2>
      
    </section>
    </div>
    </body>
    )

}

export default Home 