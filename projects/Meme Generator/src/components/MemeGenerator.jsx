import { useState, useEffect } from "react";
import "../App.css";
import photo from "../assets/gallery.svg";
import trollface from "../assets/Trollface.svg";

function MemeGenerator() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    if (allMemes.length === 0) return;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      imageUrl: url
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  };

  return (
    <div className="main-cont">
      <div className="header">
        <img src={trollface} alt="Trollface" />
        <h1>Meme Generator</h1>
      </div>
      <div className="input">
        <span>
          <h3>Top text</h3>
          <input
            placeholder="Shut Up"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          ></input>
        </span>
        <span>
          {" "}
          <h3>Bottom Text</h3>
          <input
            placeholder="Take my Money"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
        </span>
      </div>
      <button onClick={getMemeImage}>
        Get a Meme Image <img src={photo} alt="icon" />
      </button>
      <div className="meme-cont">
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
        <img src={meme.imageUrl}></img>

      </div>
    </div>
  );
}

export default MemeGenerator;
