import React, { useCallback, useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import Child from './Components/Child'
function App(props) {
const [count, setCount] = useState(0);
const callBack = useCallback((count) =>{
setCount(count);
},[])
  console.log(props)
  return (
    <div className="App">
      {/* <Child parentCallback={callBack} /> */}
      {/* <h2>{count}</h2> */}
        <Header />

 <hr />
 

    </div>
  );
}

export default App;
