import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../firebase/fire"
import { LODING, SUCCESS,SUCCESSDEL } from "./actionType"

const useCollaction=collection(db,"product")

// add
export const addData=async(state)=>{
    await addDoc(useCollaction,state)
}

// get
export const getData = async(dispatch)=>{

    dispatch({type :LODING })
    let a = await getDocs(useCollaction)
    const d = a.docs.map((el) => ({
    id: el.id,...el.data()}))
    dispatch({type : SUCCESS, payload : d })
    console.log(d)
}

// delete
export const deleteData=(dispatch)=>async(id)=>{
    console.log(id)
    let c = doc(db,"product",id)
    console.log(c)
    await deleteDoc(c)
    dispatch({type:SUCCESSDEL})
    getData(dispatch)
    
}

// edit
export const editData=(dispatch)=>async(id,state)=>{
    console.log(id)
    let d =doc(db,"product",id)
    updateDoc(d,state)

     getData(dispatch)
}