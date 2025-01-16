
import { error, loding, success } from "./actionType"

const use ={
    Login : false,
    User : "",
    Lodign : false,
    Error : false
}
export const reducer=(state=use,action)=>{
    switch(action.type){
        case loding :
            return {...state,Lodign:true}
        case success :
            return {...state , Loding:false , Login:true , User : action.payload}  
        case error : 
            return {...state , Loding:false , Error:true}
        default : return state          
    }
}