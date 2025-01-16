import { error, loding, success } from "../loginReducer/actionType"

const productData={
    isloding:false,
    issuccess:false,
    iserror :false,
    product :[]
}

export const ProductReducer=(state=productData,action)=>{
    switch(action.type){
        case loding :
            return {...state , isloding:true}
        case success :
            return {...state , isloding:false , issuccess:true , product : payload}
        case error :
            return {...state , isloding:false , iserror:true}
        default : return state            
    }
}