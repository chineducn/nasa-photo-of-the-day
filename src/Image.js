import React from 'react';
import image from './rwby.jpg';


const Image = ({ iamge, imageTitle }) => {
    return <div>Image
        <img src={image} alt={imageTitle}/>
    </div>
}

export default Image;