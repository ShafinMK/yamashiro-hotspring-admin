import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios').default;

const CheckBookings = () => {
    const { servicename } = useParams();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/booking/?service=${servicename}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data);
            })
    }, []);
    const handleDelete=(bookingid) =>{
        axios.delete(`http://localhost:5000/booking/${bookingid}`)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    return (
        <div className='container'>
            <h4 className='text-center'>Service Booking List</h4>
            <table className='table'>
                <thead>
                    <tr>
                        
                        <th scope="col">Date</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email </th>
                        <th scope="col">Service </th>
                        <th scope="col">Price </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => (
                            <tr>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.firstName}</td>
                                <td>{booking.lastName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.service}</td>
                                <td>{booking.price}</td>
                                <td><button onClick={()=>{handleDelete(booking._id)}} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CheckBookings;