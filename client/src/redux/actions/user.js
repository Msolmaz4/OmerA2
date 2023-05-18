import  axios from 'axios'
//action ayarlamam yaptiktan sonra kayit sayfasins agidikir
//authdata yaziyordu duyeltik cunku ben kayit olurken auth  datayi yuklameims

export const registirAction = (auth)=>async(dispatch) =>{

    try {
        const {data} = await axios.post('http://localhost:5001/user/register',auth)

        dispatch({type:'REGISTER',payload:data})
        window.location ='/'
        
    } catch (error) {
        console.log('autdataRegister',error)
    }

}


export const loginAction = (auth)=>async(dispatch)=>{
    try {
        const {data} = await axios.post('http://localhost:5001/user/login',auth)

        dispatch({type:'LOGIN',payload:data})
        window.location ='/'
    } catch (error) {
        console.log('autdataLogin',error)
    }
}
export const logoutAction = ()=>(dispatch)=>{
    try {
        dispatch({type:'LOGOUT'})
        window.location='/user'
        
    } catch (error) {
        
    }
}