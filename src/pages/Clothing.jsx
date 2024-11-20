import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

function Clothing() {
    let [items, setItems] = useState([]);
    const cookies = new Cookies();
    let token = useSelector((state) => state.token.token);
    
    useEffect(() => {
        let dataRes;
        let response = fetch("http://localhost:5001/Item/GetItems/0/na/na", {
            method: "GET",
            headers : { 'Content-type' : 'application/json', 
                'Authorization': 'Bearer ' + cookies.get("jwt_authorization")}
        }).then((res) => res.json()).then((data) => { setItems(data)});
        
       
    }, []);

       
  return (
    <div>
        <div className="filters"></div>
        <div className="results flex justify-center items-center gap-6 p-6">

      {items.map((item) => {return(
        <div className="item-card bg-white p-4">

            <img src="" alt="" />
            <p className='text-lg title'>{item.itemName}</p>
            <p>{item.itemDescription}</p>
            <div className="card-bottom-info">
                <p>{item.itemPrice}</p>
                <p>{item.colors}</p>
            </div>
            <a href=""><p className='text-teal-900'>Add To Cart</p></a>
        </div>
      )})}
        </div>
    </div>
  )
}

export default Clothing
