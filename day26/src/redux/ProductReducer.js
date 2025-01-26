import { EDIT, ERROR, LODING, SUCCESS, SUCCESSDEL } from "./actionType"

let data={
    isLoding : false,
    isSuccess : false,
    isError : false,
    isdelete :false,
    isEdit:false,
    product :[],
    edit:""
}

export const Reducer = (state=data,{type,payload})=>{
    switch(type){
        case LODING :
            return {...state,isLoding:true}
        case SUCCESS :
            return {...state , isLoding :false , isSuccess:true , product:payload}
        case SUCCESSDEL :
            return {...state ,isLoding : false ,isdelete:true} 
        case EDIT :
            return {...state , isLoding :false , isEdit:true,edit:payload}       
        case ERROR :
            return {...state , isLoding:false , isError:true}        
        default : return state
    }
}