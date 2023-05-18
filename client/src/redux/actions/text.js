import  axios from 'axios'


export const getPostAction = ()=>async(dispatch) =>{

    try {
        const {data} = await axios.get('http://localhost:5001/text/getPotst')

        

        dispatch({type:'GET_POSTS',payload:data})
       
        
    } catch (error) {
        console.log('autdataRegister',error)
    }

}

export const createPostAction = (postData)=>async(dispatch) =>{

    try {
        const {data} = await axios.post('http://localhost:5001/text/createPost',postData)

       

        dispatch({type:'CREATE_POST',payload:data})
       
        
    } catch (error) {
        console.log('autdataRegister',error)
    }

}
export const updatePostAction = (id,postData)=>async(dispatch) =>{

    try {
        const {data} = await axios.patch(`http://localhost:5001/text/updatePost/${id}`,postData)

        

        dispatch({type:'UPDATE_POST',payload:data})
       
        
    } catch (error) {
        console.log('autdataRegister',error)
    }

}
export const deletePostAction = (id)=>async(dispatch) =>{

    try {
         await axios.delete(`http://localhost:5001/text/deletePost/${id}`)

        

        dispatch({type:'DELETE_POST',payload:id})
       
        
    } catch (error) {
        console.log('autdataRegister',error)
    }

}