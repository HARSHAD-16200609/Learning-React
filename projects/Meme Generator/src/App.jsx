import './App.css'
import photo from "./assets/gallery.svg"
import meme from "./assets/image.png"
import trollface from "./assets/Trollface.svg"
function App() {


  return (
    <>
    <div className="main-cont">
      <div className="header">
        <img src={trollface}></img><h1>Meme Generator</h1>
      </div>
      <div className="input">
        <span><h3>Top text</h3>
        <input placeholder='Shut Up'></input></span>
        <span>  <h3>Bottom Text</h3>

        <input placeholder='Take my Money'></input></span>
      
      </div>
       <button>Get a Meme Image <img src={photo}></img></button> 
  <div className="meme-cont">
    <img src={meme}></img>
  </div>
    </div>
    </>
  )
}

export default App
