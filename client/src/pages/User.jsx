import React from "react";

const User = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="w-1/4 bg-white">
        <h1>Post Paylas</h1>
        <div className="flex flex-col space-y-3"> 
          <input type="text" placeholder="name" className="" />
          <input type="text" placeholder="email" className="" />
          <input type="text" placeholder="password" />
        </div>
        <div className="cursor-pointer hover:bg-indigo-900 w-full p-2 text-center bg-indigo-600 text-white rounded-md">
          Kayit Ol
        </div>
      </div>
    </div>
  );
};

export default User;
