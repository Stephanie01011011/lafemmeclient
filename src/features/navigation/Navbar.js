import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Cookies from 'universal-cookie';
// import jwt from 'jwt-decode';

function Navbar() {
  let [login, setLogin] = useState("");
  let [color, setColor] = useState("text-teal-900 bg-teal");
  let [nav, setNav] = useState("");
  let [user, setUser] = useState(null);
  let token = useSelector((state) => state.token.token);
  const cookies = new Cookies();

  
  const logging_in = (jwt_token) => {
    // const decoded = jwt(jwt_token);
    // setUser(decoded);
    
    if(login == "Log Out"){
      
      logging_out();
    } else {

    
    var now = new Date();
    cookies.set("jwt_authorization", jwt_token, {
      expires: new Date(now.getTime() * 1000),
    });
  }
  }

  const logging_out = () => {
    // setUser(null);
    cookies.remove("jwt_authorization");
  }

  useEffect(() => {
    
    if(window.location.pathname == "/" || window.location.pathname == "/login"){
      setColor("text-white");
      setNav("navbar fixed top-0 left-0 right-0");
      
    } else {
      setColor("text-teal-900");
      setNav("navbar");
    }

    if (token.payload == undefined){
      setLogin("Log In")
      
    } else {
      setLogin("Log Out")
      logging_in(token.payload);
    }
    
    if(cookies.get("jwt_authorization") !== undefined){
      setLogin("Log Out");
    }

  }, [token]);
 
  return (
    
    <div className={nav}>
      <div className={color}>
      <nav className="bg-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
     
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start max-w-fit">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
            <a href="/clothing" className="rounded-md px-3 py-2 text-sm font-light hover:underline hover:underline-offset-4" aria-current="page">Clothing</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-light hover:underline hover:underline-offset-4">Beauty</a>
           
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
            <a href="/" className="title px-3 py-2 text-7xl font-medium" aria-current="page">La Femme</a>
          
           
          </div>
        </div>
      </div>

    

      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <a href="#" className="rounded-md px-3 py-2 text-sm font-light hover:underline hover:underline-offset-4">About LaFemme</a>
      <a href={login == "Log Out" ? "/" : "/login"} className="rounded-md px-3 py-2 text-sm font-light hover:underline hover:underline-offset-4" onClick={logging_in}>{login}</a>
      <a href="/cart" className="rounded-md px-3 py-2 text-sm font-light hover:underline hover:underline-offset-4">Cart(0)</a>

        
      
      </div>
    </div>
  </div>

  
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      
      <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Clothing</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Beauty</a>
    
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default Navbar
