import React, { useState, useEffect } from "react";
function Teams(){
    const [data, setData] = useState([]);
    const url = 'https://randomuser.me/api/';
    const getData = () =>
        fetch(url)
        .then((res) => res.json())
        .then((data)=>{
            setData(data)
            console.log(data)
        })
     
    useEffect(() => {
      getData()
    
      return () => {
        console.log("Componet is renderd")
      }
    }, [])
    

  return(
      <div className="container">
          <h1>Teams</h1>
          <div className="row">
             {
                 data?.results?.map((item, index)=>
                 <div key={index} className="col-lg-4">
                     <div className="card">
                     <img className="card-img-top" src={item.picture.large} alt="Card image cap" />
                     <div className="card-body">
                        <h5 className="card-title">{item.name.title} {item.name.first} {item.name.last}</h5>
                        <p className="card-text">{item.phone}</p>
                    </div> 
                    <ul class="list-group list-group-flush">
                        <li className="list-group-item">{item.email}</li>
                        <li className="list-group-item">Gender: {item.gender}</li>
                        <li className="list-group-item">Country: {item.location.country}</li>
                        <li className="list-group-item">State: {item.location.state}</li>
                        <li className="list-group-item">City: {item.location.city}</li>
                        <li className="list-group-item">Postcode: {item.location.postcode}</li>
                    </ul>
                         
                     </div>
                 </div>
                 )
             }
          </div>
          
      </div>
  )

}

export default Teams;