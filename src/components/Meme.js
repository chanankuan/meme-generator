import { useState } from "react";
import meme from "../assets/images/memeimg.jpeg";
import memesData from "../assets/memesData";
import "../assets/styles/Meme.css";

export default function Meme() {
  const [memeImage, setMemeImage] = useState(getMemeImage);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    return memesArray[randomNumber].url;
  }

  function getNewMeme() {
    setMemeImage(getMemeImage);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getNewMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="content">
        <img className="content--image" src={memeImage} alt="" />
      </div>
    </main>
  );
}
