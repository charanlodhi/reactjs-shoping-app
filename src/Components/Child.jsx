import React, {useCallback, useState} from 'react';

 const Child = ({parentCallback}) =>{
    const [count, setCount] = useState(0);
   


    return(
        <button onClick={()=>{setCount((count)=>count +1); 
        parentCallback(count +1)
        }}>Increase Value</button>
    )
 }
export default Child;


