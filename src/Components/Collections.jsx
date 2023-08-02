import React from 'react';
import About from './About';
function Collections(props) {
    const userdata = [
        {
            prodName:"Leather bag",
            price:"120.50",
            prodImg:"https://d293e64rvqt2z5.cloudfront.net/ps17/290-home_default/printed-summer-dress.jpg"
        },
        {
            prodName:"Leather bag",
            price:"140.50",
            prodImg:"https://d293e64rvqt2z5.cloudfront.net/ps17/317-home_default/printed-summer-dress.jpg"
        },
        {
            prodName:"Leather bag",
            price:"180.50",
            prodImg:"https://d293e64rvqt2z5.cloudfront.net/ps17/309-home_default/printed-summer-dress.jpg"
        }
    ]
console.log(props)
        return (
            <div className='container'>
               <div className='addedCart'>{props.data.length}</div>
            <div className='row'>
               {userdata.map((item) =>(
                   <div className='col-lg-4'>
                   <div><img src={item.prodImg} alt="" /></div>
                   <h2>{item.prodName}</h2><h2>{item.price}</h2>
                   <div 
                   onClick={()=>props.addToCartHandler({price:1000, prodName:"Leather parse"})}
                   className='btn mr-2 btn-primary btn-success'>Add to Cart</div>
                   <div 
                   onClick={()=>props.removeToCartHandler()}
                   className='btn btn-primary btn-danger ms-1'>Remove to Cart</div>
                  </div>
                  
               ))}
            </div>
           
            </div>
        );
    
}
 
export default Collections;