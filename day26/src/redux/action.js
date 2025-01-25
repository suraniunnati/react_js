import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/fire"

const useCollaction=collection(db,"product")

export const AddData=async(state)=>{
    await addDoc(useCollaction,state)
}

export const GetData=async()=>{
    let a = await getDocs(useCollaction)
    a.docs.map((el)=>{
        return {id:el.id,...el.data()}
    })
    console.log(a)
}