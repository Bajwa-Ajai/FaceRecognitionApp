import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

const Logo=()=>{
    return(
        <div  className='ma4 mt0'>
        <Tilt className="Tilt shadow-4" options={{ max : 50 }} style={{ height: 150, width: 150}} >
        <div className="Tilt-inner"><img alt='logo' src={brain}/></div>
        </Tilt>
            
        </div>
    );
}
export default Logo;