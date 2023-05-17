import React, { useState } from "react";

const User = () => {

  const [signup ,setSignup] = useState(true)

  const [auth,setAuth] = useState({username:"",email:"",password:""})

  const changeAuth = (e)=>{
    
    setAuth({...auth,[e.target.name] : e.target.value})
  }

console.log('auth',auth)

  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
    <div className='w-1/3 bg-white p-3 mb-5'>
        <h1>{signup ? "Register" : "Login"}</h1>
        <div className="flex flex-col space-y-3"> 
          { signup && <input type="text" name="username" value={auth.username} onChange={changeAuth}  placeholder="username" className='input-style'/>}
          <input type="text" placeholder="email" name="email" value={auth.email}  onChange={changeAuth} className='input-style' />
          <input type="text" placeholder="password" name="password" value={auth.password} onChange={changeAuth} className='input-style'/>
        </div>
        <div className="text-red-500 text-sm cursor-pointer mb-4">
          {
            signup ? <span onClick={()=>setSignup(false)}>Kayit olmak icin tiklayin</span>
            : <span onClick={()=>setSignup(true)}> giris yapmak icin tiklayin</span>
          }
          
         
        </div>
        <div className="cursor-pointer hover:bg-indigo-900 w-full p-2 text-center bg-indigo-600 text-white rounded-md">
          {signup ? "kayit ol " : "giris yap"}
        </div>
      </div>
    </div>
  );
};

export default User;
