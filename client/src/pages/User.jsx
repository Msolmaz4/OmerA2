import React from "react";

const User = () => {
  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
    <div className='w-1/3 bg-white p-3 mb-5'>
        <h1>Post Paylas</h1>
        <div className="flex flex-col space-y-3"> 
          <input type="text" placeholder="name" className='input-style'/>
          <input type="text" placeholder="email" className='input-style' />
          <input type="text" placeholder="password" className='input-style'/>
        </div>
        <div className="text-red-500 text-sm cursor-pointer">Daha once kayit oldunuz mu</div>
        <div className="cursor-pointer hover:bg-indigo-900 w-full p-2 text-center bg-indigo-600 text-white rounded-md">
          Kayit   Ol
        </div>
      </div>
    </div>
  );
};

export default User;
