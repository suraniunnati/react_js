
import {  useSelector } from 'react-redux';


function RoomDetails() {
  const Data = useSelector(store => store.dataform)
  console.log(Data)
  return (
    <div>
        <h2>Room Details</h2>
            <p><strong>Name:</strong> {Data.name}</p>
            <p><strong>Price:</strong> ${Data.price} per night</p>
            <button onClick={() => navigate("/")}>Back to Room List</button>
      </div>
   
  )
}

export default RoomDetails