

//baslangicta state ve action alir baslangicta state user olarak yaptik ve nuull 
//sonra burada actionlari ayarlaruz action register ve login 
//logal store action payload yukleriz
//genel ayarlamma yapildiktan sonra store gisdip bunu baglariy
const userReducer = (state={user : null},action)=>{
    switch (action.type) {
        case "REGISTER":
            localStorage.setItem('auth',JSON.stringify(action.payload))
         return {
            ...state,
            auth:action.payload

         }
         case "LOGIN":
            localStorage.setItem('auth',JSON.stringify(action.payload))
         return {
            ...state,
            auth:action.payload

         }
         case "LOGOUT":
            localStorage.clear()
         return {
            ...state,
            auth:null

         }
    
        default:
            return state
    }
    
}

export default userReducer