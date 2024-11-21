import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

function Clothing() {
    let [items, setItems] = useState([]);
    const cookies = new Cookies();
    let token = useSelector((state) => state.token.token);
    let [url, setUrl] = useState("http://localhost:5001/Item/GetItems/0/na/na");
    let [itemId, setItemId] = useState(0);
    let [itemType, setItemType] = useState("na");
    let [itemColor, setItemColor] = useState("na");
    useEffect(() => {
        let dataRes;
        let response = fetch(url, {
            method: "GET",
            headers : { 'Content-type' : 'application/json', 
                'Authorization': 'Bearer ' + cookies.get("jwt_authorization")}
        }).then((res) => res.json()).then((data) => { setItems(data)});
        
       
    }, [url]);

    
       
  return (
    <div>
        <div className="filters mt-16 flex justify-around align-center">
            <div className="type-filter">
            <label htmlFor="type" className='title text-2xl mr-6 text-teal-900'>Type:</label>
            <select name="type" id="" onChange={(e) => {
                setItemType(e.target.value);
            }}>
                <option value="na">All</option>
                <option value="shirt">Shirts</option>
                <option value="pants">Pants</option>
                <option value="dresses">Dresses</option>
                <option value="jackets">Jackets</option>
                <option value="tops">Tops</option>
                <option value="shoes">Shoes</option>
            </select>
            </div>
            <div className="color-filter">
            <label htmlFor="color" className='title text-2xl mr-6 text-teal-900'>Color:</label>
            <select name="color" id="" onChange={(e) => {
                setItemColor(e.target.value);
            }}>
                <option value="na">All</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="grey">Grey</option>
                <option value="tan">Tan</option>
                <option value="brown">Brown</option>
            </select>
            </div>
            <div className="filter-btns w-52">
                <a href="#" className='button' onClick={() => {
                    setUrl("http://localhost:5001/Item/GetItems/0/" + itemType + "/" + itemColor);
                    
                }}><p className='text-white bg-teal-900 pt-3 pb-3 rounded'>Filter</p></a>
            </div>
        </div>
        <div className="results flex justify-center items-center gap-8 p-6 mt-16">

      {items.map((item) => {return(
        <div className="item-card p-4 shadow-md" key={item.itemId}>

            <img src="https://www.rouje.com/cdn/shop/files/B009106-R1-21-24A_ee202e66-e9fb-4be0-8f2b-73135a007c96.jpg?crop=center&height=1801&v=1731663248&width=1350" alt="" className='itemImg'/>
            <p className='text-lg mt-3 mb-3 title'>{item.itemName}</p>
            <p className='mt-3 mb-3'>{item.itemDescription}</p>
            <div className="card-bottom-info flex justify-between mt-3 mb-3 text-teal-800">
                <p>{item.itemPrice}</p>
                <p>{item.colors}</p>
            </div>
            <div className="buttons flex flex-col items-center justify-center text-white gap-3">
            <a href="" className='button'><p className='bg-black pt-3 pb-3 rounded'>Add To Cart</p></a>
            <a href="" className='button'><p className='bg-teal-900 pt-3 pb-3 rounded'>View More</p></a>
            </div>
        </div>
      )})}
        </div>
    </div>
  )
}

export default Clothing
