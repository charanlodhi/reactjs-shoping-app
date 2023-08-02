import React, { useState } from "react";
import Data from "./mock_data.json";
import App from "../App.css";

export default function SearchUser() {
  const [query, setQuery] = useState("");
  //const Data = ["Apple", "Mango", "kiwi", "Orange", "Banana"]
  return (
    <div className="container mt-5">
      <h5>Search User details</h5>
      <input className="form-control" type="text" placeholder="Please Enter value" onChange={(event) => setQuery(event.target.value)} />
      <div className="row mt-3">
        {Data.filter((post) => {
          if (query === "") {
            return post;
          } else if (post.first_name.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
            <div className="col-lg-4 mb-2">
          <div className="card p-3" key={index}>
              <div className="">
                 
                      <h4>{post.first_name} {post.last_name}</h4>
                      <div>{post.email}</div>
                      <div>{post.gender}</div>
                          
            
          </div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
