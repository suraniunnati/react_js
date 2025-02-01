import { ERROR, LODAING, SUCCESS,SUCCESSsingle } from "./ActionType"

let data ={
    isLodaing :false,
    isSuccess:false,
    isError:false,
    product:[],
    singleProduct:[]
}
export const ProductReducer=(state=data,{type,payload})=>{
    switch(type){
        case LODAING:
            return {...state,isLodaing:true}
        case SUCCESS :
            return {...state,isLodaing:false,isSuccess:true ,product:payload}
        case SUCCESSsingle :
            return {...state,isLodaing:false,singleProduct:payload}    
        case ERROR :
            return {...state,isLodaing:false,isError:true}
        default:return state            

    }
}