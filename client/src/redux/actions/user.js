import  axios from 'axios'


export const registirAction = (authData)=>async(dispatch) =>{

    try {
        const {data} = await axios.post('http://localhost:5001/register',authData)

        dispatch({type:'register',payload:data})
        window.location ='/'
        
    } catch (error) {
        console.log('autdataRegister',error)
    }

}


export const loginAction = (authData)=>async(dispatch)=>{
    try {
        const {data} = await axios.post('http://localhost:5001/login',authData)

        dispatch({type:'register',payload:data})
        window.location ='/'
    } catch (error) {
        console.log('autdataLogin',error)
    }
}