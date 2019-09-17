import React from 'react';
import botox from 'styled-components';

const CoolPar = botox.div`
 font-size: 15px;
 width: 500px;
 margin: 0 auto;
 color: black;
`

const ImageDescription = ({ descItem }) => {
    return <CoolPar>{descItem}</CoolPar>
}

export default ImageDescription;