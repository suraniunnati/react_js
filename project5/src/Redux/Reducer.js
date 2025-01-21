import { error, loding, success } from "./actionType"

const data={
    loding : false,
    success : false,
    error : false,
    product :[]
}

export const Reducer=(state=data,action)=>{
    switch(action.type){
        case loding :
            return {...state,loding:true}
        case success :
            return {...state,loding:false,success:true,product:  action.payload}
        case error :
            return {...state,loding:false,error:true}
        default: return state            
    }
}