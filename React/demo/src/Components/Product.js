 import React ,{Fragment} from 'react';
 import "./Product.css";
 
 const Product = ({products}) => {
    //  const products= ["laptop","Ipad","Mouse","Desktop","Charger","Keyword"];

    return (
        <Fragment>
            <div>Product</div>
            {/* <ul>
                {products.length>0 && products.map((item,index)=>{
                    return <li key={index}>{item}</li>;
                })}
            </ul> */}
        <div className="cards">
        {products && products.length>0 ?
            products.map((item)=>{
                return(
                    <article className="card" key={item?.id}>
                <img
                  src={item?.imageURL}
                  alt="Sample photo"
                />
                <div className="text">
                  <h3>{item?.heading}</h3>
                  <p>
                    {item?.description}
                  </p>
                  <button>{item?.buttonTile}</button>
                </div>
              </article>
                );

            })

         : <div>No Products to Show</div>}
       
      </div>
        </Fragment>
    );
   
 };
 
 export default Product;

//  for(let i=0;i<products.length;i++){
//     return <div>products[i]</div>
//  }