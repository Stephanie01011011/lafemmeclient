import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../features/token/tokenSlice';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { setUserId, setName, setEmail, setCart } from '../features/user/userSlice';


function Login() {
  let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusMsg, setStatusMsg] = useState("");
    let token = useSelector((state) => state.token.token);
    let userId = useSelector((state) => state.user.userId);
    const dispatch = useDispatch();
   let cookies = new Cookies();
   const [data, setData] = useState({});
    
    const handleLogin = () => {
        
        let response = fetch("http://localhost:5001/Auth/Login", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers : { 'Content-type' : 'application/json', Accept : 'application/json'}
        }).then((res) => {if (!res.ok){return res.text().then(text => { throw new Error(text) })} else {
          return res.json();
        }}).then(data => setData(data));

        
        dispatch(setToken(data.token));
        dispatch(setUserId(data.userId));
        
        let userResponse = fetch("http://localhost:5001/User/GetUsers/" + data.userId, {
          method: "GET",
          headers : { 'Content-type' : 'application/json', 
            'Authorization': 'Bearer ' + data.token,
            Accept : 'application/json'}
      }).then((res) => {if (!res.ok){return res.text().then(text => { throw new Error(text) })} else {
        return res.json();
      }}).then(data => {dispatch(setEmail(data[0].email));dispatch(setCart(data[0].cartId));dispatch(setName(data[0].firstName))})
    
       

        
    };

    useEffect((response) => {
      if (token.payload !== undefined){
        
        navigate('/');
      } else {
        
        navigate('/login', {replace: true});
      }

    }, [token])
    

    const handleRegister = () => {

    };
  return (
    <div className='h-screen bg-teal-900'>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 text-left">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-teal-900 hover:text-black">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
        {statusMsg &&
        <p className='mt-3'>{statusMsg}</p>
}
      </div>

      <div>
        <a className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-teal-900 shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleLogin} >Sign in</a>
        <h3 className='mt-3 mb-3'>Or</h3>
        <a className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleRegister}>Register</a>
      </div>
    </form>

  </div>
</div>
      
    </div>
  )
}

export default Login
