import React, { useState } from 'react'
import {AiTwotoneCloseCircle} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
//genelyapiyi olusturdaukta sonra derducer yapmamamiz gerekur

const Modal = () => {

  const dispatch = useDispatch()
  const [postData,setPostData] = useState({user:"",title:"",description:""})

  const onChangF = (e)=>{
    setPostData({...postData,[e.target.name] : e.target.value})
  }


 
  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center'>
        <div className='bg-white w-1/3 p-2 rounded-md'>
            <div onClick={()=>dispatch({type:'MODAL',payload:false})} className='flex items-center justify-between cursor-pointer'>
            <h1 className='font-bold text-2xl '>POST PAYLAS</h1>
            <AiTwotoneCloseCircle size={30}/>
            </div>
            
            <div className='my-4 flex flex-col space-y-3'>
                <input name='user' value={postData.user} onChange={onChangF} type="text" placeholder='user'  className='input-style' />
                <input  value={postData.title} onChange={onChangF}  name='title'  type="text" placeholder='Title' className='input-style' />
                <input value={postData.description} onChange={onChangF}  name='description'  type="text" placeholder='Description' className='input-style'/>
            </div>
            <div className='w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800'>PAYLAS</div>
            

        </div>
    </div>
  )
}

export default Modal