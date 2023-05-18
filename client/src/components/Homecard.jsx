import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePostAction } from '../redux/actions/text'
import { AiTwotoneDelete} from 'react-icons/ai'
import {GrUpdate} from 'react-icons/gr'


const Homecard = ({post}) => {

    const dispatch = useDispatch()

  const deletee  =(id)=>{
  console.log(id,'deleteeee')
  dispatch(deletePostAction(id))
  //window.location.reload()
  }
  const update =(id)=>{
    dispatch({type:'MODAL',payload:{open:true,updateId:id}})

  }


  return (
    <div className='w-1/4 border p-3 rounded-md bg-gray-50'>
        <div className='font-bold text-xl '>{post?.dere.title} </div>
        <div className='text-gray-700 text-sm'>{post?.dere.description} </div>
        <div>
            <span className='text-xs text-gray-500'>{post?.dere.user} </span>
            <span className='text-xs text-gray-500'>{(post?.dere.date)?.substring(0,10)} </span>

                
        </div>
<div>
    <AiTwotoneDelete size={24} onClick={()=>deletee(post.dere._id)}/>
    <GrUpdate onClick={()=>update(post.dere._id)}  size={28}/>
</div>
        
        
        
        </div>
  )
}

export default Homecard