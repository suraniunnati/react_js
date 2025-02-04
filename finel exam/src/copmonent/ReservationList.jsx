import axios from 'axios'
import React, { useState } from 'react'
import { loding, success } from '../redux/actionType'
import { useDispatch, useSelector } from 'react-redux'
import "../App.css"

function ReservationList() {

    let [list, setList] = useState([])
    const Data = useSelector(store => store)
    // console.log(Data);

    const dispatch = useDispatch()

    axios.get(`http://localhost:3000/data`).then((res) => {
        // dispatch({type:loding})
        // console.log(res.data)
        setList(res.data)
        // dispatch({type:success, payload :res.data.dataform})

    })
        .catch((err) => { console.log(err) })
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Chack In</th>
                    <th>Chech Out</th>
                </tr>

          
            {list.map((el) => {

                return (
                    <tr>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.phone}</td>
                        <td>{el.chackin}</td>
                        <td>{el.chackout}</td>
                    </tr>
                )

            })}
              </table>
        </div>
    )
}

export default ReservationList