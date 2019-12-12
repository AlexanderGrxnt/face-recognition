import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Brain.png';

const Logo = () => {
    return (
        <div className=" center ">
            <Tilt className="Tilt br2 shadow-2 center" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
             <div className="Tilt-inner center"> <img style={{paddingTop: '5px'}} alt="logo" src={brain}/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;