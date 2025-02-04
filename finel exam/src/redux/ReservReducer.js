import { error, loding, success } from "./actionType"


const productData={
    isloding:false,
    issuccess:false,
    iserror :false,
    dataform :[]
}

export const ReservReducer=(state=productData,action)=>{
    switch(action.type){
        case loding :
            return {...state , isloding:true}
        case success :
            return {...state , isloding:false , issuccess:true , dataform : payload}
        case error :
            return {...state , isloding:false , iserror:true}
        default : return state            
    }
}