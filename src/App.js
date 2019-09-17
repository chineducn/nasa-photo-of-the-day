import React, { useState, useEffect } from "react";
import "./App.css";
import Image from './Image';
import ImageDate from './ImageDate';
import ImageTitle from './ImageTitle';
import ImageDescription from './ImageDescription';
import axios from 'axios';
import botox from 'styled-components';



function App() {
  const apodApi = 'https://api.nasa.gov/planetary/apod?api_key=V1J4M6GlXcTMqo4ieupefSJSF4EiUSdcjjUbufgM';
  const [imageState, setImageState] = useState();
  const [titleState, setTitleState] = useState();
  const [dateState, setDateState] = useState();
  const [descState, setDescState] = useState();

  const CoolDiv = botox.div`
  
  color: grey;
`
  const ImageComp = botox(Image)`
   width: 400px;
  `

  useEffect(() => {
    axios.get(apodApi)
      .then(apodReply => {
        // debugger
        const { date, title, hdurl, explanation } = apodReply.data;
        setTitleState(title);
        setDateState(date);
        setImageState(hdurl);
        setDescState(explanation);
      })
  }, []);

  return (
    <div className="App">
      <CoolDiv>
        {/* <p>
          Read through the instructions in the README.md file to build your NASA
          app Have fun 🚀!
        </p> */}
        <ImageTitle titleItem={titleState} />
        <ImageDate dateItem={dateState} />
        <ImageComp imageItem={imageState} titleItem={titleState} />
        <ImageDescription descItem={descState} />
      </CoolDiv>
    </div>
  );
}

export default App;
