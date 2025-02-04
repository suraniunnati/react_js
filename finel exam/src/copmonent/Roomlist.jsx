import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';

function Roomlist() {
  // const navigate=useNavigate()
  const Data = useSelector(store => store.dataform)
  console.log(Data.dataform);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchRooms)
  },[])

 
  // const deatils=(id)=>{
    
  //   navigate(`/roomdetails/${id}`)
  // }
  return (
    <div>
    <h2>Available Rooms</h2>
    <ul>
        {Data.map((room) => (
          <>
            <li key={room.id}>{room.name} - ${room.price}</li>
           <Link to={`/roomdetails/${room.id}`}><button onClick={()=>deatils(room.id)}>Go for deatils</button></Link>
            </>
        ))}
    </ul>
</div>
  )
}

export default Roomlist