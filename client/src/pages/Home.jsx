import React from 'react'
import { useSelector } from 'react-redux'
import Homecard from '../components/Homecard'

const Home = () => {

  const {posts} = useSelector(state=>state.posts)
  console.log('posts',posts)
  return (
    <div className='flex items-center m-5 flex-wrap'>

      {
 posts?.map((post,i)=>(
  <Homecard  key={i} post={post}/>
))
      }
       
      
    </div>
  )
}

export default Home