import React from 'react';
//import 'logo.css';

const Rank=({name,entries})=>{
    return(
        <div  className='ma4 mt0'>
            <div className='white f3'>
             
            {`${name},Your current Rank is ....`}
            </div>
            <div className='white f1'>
            {`#${entries}`}
            </div>
        </div>
    );
}
export default Rank;