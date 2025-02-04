
import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function RoomDetails() {
 const {id}= useParams()
 console.log(id)
 let [state,setState]=useState("")
 console.log(state)
  const Data = useSelector(store => store.dataform)
  console.log(Data)

  if(Data[0].id==id){
    console.log("data.........")
  }
  else{
    console.log("error......")
  }


  return (
    <div>
        <h2>Room Details</h2>
      </div>
   
  )
}

export default RoomDetails