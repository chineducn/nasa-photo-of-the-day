import React, { useState, useEffect } from "react";
import "./App.css";
import Image from './Image';
import ImageDate from './ImageDate';
import ImageTitle from './ImageTitle';
import ImageDescription from './ImageDescription';

function App() {



  const [imageState, setImage] = useState();
  const [titleState, setTitleState] = useState();
  const [dateState, setDateState] = useState();
  const [descState, setDescState] = useState();

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app Have fun 🚀!
      </p>
      <ImageTitle />
      <ImageDate />
      <Image />
      <ImageDescription />
    </div>
  );
}

export default App;
