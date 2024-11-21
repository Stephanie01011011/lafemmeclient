import React, {useEffect, useState} from 'react'
import Cookies from 'universal-cookie';
import { setUserId, setName, setEmail, setCart } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';


function Cart() {
    let cartId = useSelector((state) => state.user.userCart);
    const dispatch = useDispatch();
  
    let [items, setItems] = useState([]);
    const cookies = new Cookies;

    useEffect(() => {
        let dataRes;
        
        let url = "http://localhost:5001/Cart/MyCart";
        let response = fetch(url, {
            method: "GET",
            headers : { 'Content-type' : 'application/json', 
                'Authorization': 'Bearer ' + cookies.get("jwt_authorization")}
        }).then((res) => res.json()).then((data) => { setItems(data)});
        
       
    },[]);

    const handleUpdate = (value, id) => {
        let url = "http://localhost:5001/Cart/UpdateCart";
        console.log(cartId,value, id);
        let response = fetch(url, {
            method: "PUT",
            body: {"cartId": cartId.payload, "itemId": id, "amount": value},
            headers : { 'Content-type' : 'application/json', 
                'Authorization': 'Bearer ' + cookies.get("jwt_authorization")}
        }).then((res) => res.json()).then((data) => { setItems(data)});

        console.log("updated");

    }

    
  return (
    <div>
      <h1>Your Cart</h1>

      <div className="results justify-center items-center p-6 mt-16 bg-teal-900">

{items.map((item) => {return(
  <div className="item-card p-4 shadow-md flex w-1/2 bg-white m-auto gap-x-14 mb-8" key={item.itemId}>
        <div className=""> <img src="https://www.rouje.com/cdn/shop/files/B009106-R1-21-24A_ee202e66-e9fb-4be0-8f2b-73135a007c96.jpg?crop=center&height=1801&v=1731663248&width=1350" alt="" className='itemImg'/></div>
     <div className="info">
      <p className='text-lg mt-3 mb-3 title'>{item.itemName}</p>
      <p className='mt-3 mb-3'>{item.itemDescription}</p>
      <div className="card-bottom-info flex justify-between mt-3 mb-3 text-teal-800">
          <p>{item.itemPrice}</p>
          <p>{item.colors}</p>
      </div>
      <div className="buttons flex flex-col items-center justify-center text-white gap-2">
        <div className="amount text-teal-900 flex">
            <label htmlFor="amount" className='text-2xl'>Amount:</label>
            <select name="amount" id="" className='text-md' onChange={(e) => {handleUpdate(Number(e.target.value), item.itemId)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </div>
        <div className="remove">
        <a href="" className='button'><p className='bg-black pt-3 pb-3 rounded'>Remove From Cart</p></a>
        </div>
      
    
      </div>
      </div>
  </div>
)})}
  </div>
    </div>
  )
}

export default Cart
