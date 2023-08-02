import {React,useState} from "react";
function Search() {
     

    const [showResult, setResult] = useState(false);
    
    return(
          <div>
              <div className="mb-2 btn btn-primary" onClick={()=>setResult(!showResult)}>Show Data</div>
              
              {showResult ? <Result/> : null}
              </div>
    )
}

function Result() {
    const searchData = [
        {
            title:"Example text to build",
            subtitle:"Make up the bulk",
            data:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            title:"The printing and typesetting",
            subtitle:"scrambled it to make",
            data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
        },{
            title:"standard dummy text ever ",
            subtitle:"only five centuries",
            data:"since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
        }
    ]
    return(
        <div id="result" className="container">
            <div className="row">
                
                {searchData.map((item)=><div className="col-lg-4">
     
          <div className="card m-2">
          <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
              <p className="card-text">{item.data}</p>
              <div className="btn btn-danger">Get More Info</div>
          </div>
          </div>
          </div>
        )}
                </div>
            
        
              
                
        </div>
    )
}

export default Search;