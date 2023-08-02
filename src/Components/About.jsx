import React from "react";
import Search from "./Search"
const About = () => {
    const listing = [
        {
            image:"https://images.pexels.com/photos/5668797/pexels-photo-5668797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, similique cumque mollitia error maxime temporibus"
        },
        {
            image:"https://images.pexels.com/photos/3874429/pexels-photo-3874429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, similique cumque mollitia error maxime temporibus"
        },
        {
            image:"https://images.pexels.com/photos/5668796/pexels-photo-5668796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, similique cumque mollitia error maxime temporibus"
        }
    ]
const testimanials = [
    {
        Text:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        UserImage:"https://iqit-commerce.com/ps17/img/cms/people/people1.jpg",
        UserName:"John Deo",
        Degination:"Designer"
     },
     {
        Text:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        UserImage:"https://iqit-commerce.com/ps17/img/cms/people/people2.jpg",
        UserName:"Elisa",
        Degination:"Developer"
     },
     {
        Text:"Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        UserImage:"https://iqit-commerce.com/ps17/img/cms/people/people3.jpg",
        UserName:"Lora",
        Degination:"Developer"
     }
]

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Who we are?</h1>
          <p className="lead">
          I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <Search />
      <div className="container"> 
      <div className="row">
          {
              listing.map((items) =>(
                <div className="col-lg-4">
               <div class="card" >
                  <img className="card-img-top" src={items.image} alt="Card image cap" />
                  <div className="card-body">
                 <p className="card-text">{items.descr}</p>
                  </div>
               </div>
                </div>
              ))
          }
      </div>
      </div>
      <div className="container-fluid test-Bg pb-5 mt-5">
          <div className="container">
          <h2 className="p-4">Customers testimonials</h2>
          <div className="row">
             {
                 testimanials.map((obj)=>(
                    <div className="col-lg-4">
                    <p>{obj.Text}</p>
                    <div class="media d-flex align-items-center">
                      <img class="mr-3 rounded-circle img-size" src={obj.UserImage} alt="" />
                      <div class="media-body">
                          <h5 class="mt-0">{obj.UserName}</h5>
                          {obj.Degination}
                      </div>
                      </div>
                </div>
                 ))
             }
          </div>
          </div>
      </div>
    </div>
  );
};
export default About;
