import { Route, Routes } from "react-router-dom"
import ReservationForm from "../copmonent/ReservationForm"
import ReservationList from "../copmonent/ReservationList"
import Roomlist from "../copmonent/Roomlist"
import RoomDetails from "../copmonent/RoomDetails"
import PrivateRoute from "../copmonent/privateRoute"

const MainRount=()=> {
    return (<>

        <Routes>
            <Route path='/' element={<ReservationForm/>}>reseverForm</Route>
            <Route path='/reservlist' element={
                <PrivateRoute>
                <ReservationList/>
                </PrivateRoute>
                }>reseverForm</Route>
            <Route path='/roomlist' element={<Roomlist/>}>reseverForm</Route>
            <Route path='/roomdetails/:id' element={<RoomDetails/>}>reseverForm</Route>
        </Routes>

    </>

    )
}

export default MainRount