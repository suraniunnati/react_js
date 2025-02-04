import { Route, Routes } from "react-router-dom"
import ReservationForm from "../copmonent/ReservationForm"
import ReservationList from "../copmonent/ReservationList"
import Roomlist from "../copmonent/Roomlist"
import RoomDetails from "../copmonent/RoomDetails"

const MainRount=()=> {
    return (<>

        <Routes>
            <Route path='/' element={<ReservationForm/>}>reseverForm</Route>
            <Route path='/reservlist' element={<ReservationList/>}>reseverForm</Route>
            <Route path='/roomlist' element={<Roomlist/>}>reseverForm</Route>
            <Route path='/roomdetails' element={<RoomDetails/>}>reseverForm</Route>
        </Routes>

    </>

    )
}

export default MainRount