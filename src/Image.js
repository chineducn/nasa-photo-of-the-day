import React from 'react';
// import image from './rwby.jpg';


const Image = ({ imageItem, titleItem }) => {
    return <div>Image
        <img src={imageItem} alt={titleItem}/>
    </div>
}

export default Image;