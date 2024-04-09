import React from 'react'
import{useSelector,useDispatch} from "react-redux";
import {remove} from "../Store/cartSlice"

const Cart = () => {
    const items= useSelector((state)=> state.cart);
    const dispatch=useDispatch();
    const removeProductHandler=(id)=>{
        dispatch(remove(id));
    };
  return (
    <div>
        <div className='cartWrapper'>
            {items?.length>0 && items?.map((item,index)=>{
                return(
                    <div className='cartCard' key={item?.id || index}>
                        <img src={item?.image}/>
                        <h5>{item?.title}</h5>
                        <h6>Price: {item?.price}</h6>
                        <button onClick={()=>removeProductHandler(item?.id)}>Remove Item</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cart