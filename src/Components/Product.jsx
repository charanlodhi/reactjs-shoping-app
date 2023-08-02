import React , {useState} from 'react';
import { useEffect } from 'react';
import Image from 'react-bootstrap/Image'
function Product() {
    const style = {
        width:300,
    }
//const [name, setName] = useState({firstname:'CHaran SIngh', lastName:'Lodhi'})
const url = "https://fakestoreapi.com/products?sort=asc"
const [product, setProduct] = useState([])
useEffect(() =>{
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    setProduct(data)
    console.log("product", data)
  })
},[])

    return(
        <div className='container'>
        <div className='row'>
        {product.map((item, index) =>{
            return(
                <div className='col-lg-4' key={index}>
                <div className='card p-4' >
                <h4>{item.title}</h4>
                <h3><Image fluid={true} className='style' src={item.image} /></h3>
                <h5>$ {item.price}</h5>
            </div>
            </div>
            )
        })}

</div>

        {/* <h1>Products Component</h1>
        <input type="text" value={name.firstname} onChange={e=>setName({...name, firstname:e.target.value})} />
        <input type="text" value={name.lastName} onChange = {e=>setName({...name, lastName:e.target.value})} />
        <h2>First Name: {name.firstname}</h2>
        <h2>Lats Name: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2> */}
        {/* <Garage /> */}
       </div>
    )
}
export default Product;

// function Car(props){
//     return <h2>This is car Name {props.brand.model}</h2>
// }
// function Garage(){
//     const carInfo = {name:'Ford', model:"Endevers"}
  
//     console.log(carInfo)
//     return(
//         <div>
//             <Car brand={carInfo} />
//         </div>
//     )
// }
