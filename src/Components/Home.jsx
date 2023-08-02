import React from 'react';
import Banner from './Banner';
import Catelog from './Catelog';
import CollectionContainer from "../Containers/CollectionContainer";

function Home() {
   
    return(
        <div>
             <Banner />
             <Catelog />
             <CollectionContainer />
   
       </div>
    )
}
export default Home;