import React, { PureComponent } from 'react';
function Catelog() {
    let productCatlog = [
        {
            catelogName:"Best set for man",
            catlogImg:"https://d293e64rvqt2z5.cloudfront.net/ps17/img/cms/imgs/small4.jpg "

        },
        {
            catelogName:"Heading for man",
            catlogImg:"https://d293e64rvqt2z5.cloudfront.net/ps17/img/cms/imgs/small.jpg "

        },
        {
            catelogName:"Woman Dresses",
            catlogImg:"https://d293e64rvqt2z5.cloudfront.net/ps17/img/cms/imgs/dsadsa.jpg"

        }
    ]
    return(
        <div className='container'>
        <div className='row mt-4'>
        {
            productCatlog.map((items)=>(
                
                <div className='col-lg-4'>
                    <div><img className='w-100' src={items.catlogImg} alt="" /></div>
                    <h2 className='py-3'>{items.catelogName}</h2>
                </div>
                
            ))
        }</div></div>
    )
}
export default Catelog;