import React from 'react';
import botox from 'styled-components';

const CoolDiv = botox.div`
 width: 700px;
 margin: 0 auto;

 img {
     width: 100%;
 }
`

const Image = ({ imageItem, titleItem }) => {
    return <CoolDiv>Image
        <img src={imageItem} alt={titleItem} />
    </CoolDiv>
}

export default Image;