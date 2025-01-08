import { DEC, DEC1, INC, INC1, INC2 } from "./actionType"

 
 let count={
    counter1 : 5,
    counter2 : 1,
    counter3 :2
 }
 export const reducer=(state=count,action)=>{
    switch(action.type){
        case INC:
            return {...state,counter1 : state.counter1 + 5}
        case DEC:
            return {...state,counter1 : state.counter1 - 5} 
        case INC1:
            return {...state,counter2 : state.counter2 * 2} 
        case DEC1:
            return {...state,counter2 : state.counter2 / 2}   
        case INC2:
            return {...state,counter3 : state.counter3 * action.payload }                    
        default:
            return state
         
    }

 }