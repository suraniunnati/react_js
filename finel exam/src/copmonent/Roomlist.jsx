import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/action';

function Roomlist() {
  const Data = useSelector(store => store.dataform)
  console.log(Data.dataform);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchRooms)
  },[])
  return (
    <div>
    <h2>Available Rooms</h2>
    <ul>
        {Data.map((room) => (
            <li key={room.id}>{room.name} - ${room.price}</li>
        ))}
    </ul>
</div>
  )
}

export default Roomlist