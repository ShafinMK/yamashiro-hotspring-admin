import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Services = () => {
    const navigate = useNavigate();

    //Get all the services from db
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data);
            })
    }, []);

    //Update
    const handleUpdate = (id) => {
        navigate(`/updateservice/${id}`);
    };

    // delete service
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure You want to Delete?');
        if (proceed) {
            axios.delete(`http://localhost:5000/services/${id}`)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    if (response.data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }


    };

    // get bookings of a service 
    const handleBookings = (servicename) =>{
        navigate(`/servicebookings/${servicename}`);
    }

    return (
        <div className='container'>
            <h6 className='text-center'>Total Services : {services.length}</h6>

            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4'>
                {
                    services.map(service => <div className='col'>

                        <div className="card">
                            <img src={service.serviceThumb} alt="" />
                            <div className="card-body">
                                <h5 className='card-title'>{service.serviceName}</h5>
                                {/* <p>{service.description}</p> */}
                            </div>
                            <div className='p-3'>
                                <button onClick={()=>{handleDelete(service._id)}} className='btn btn-danger me-3'><i class="fa-regular fa-trash-can"></i></button>
                                <button onClick={() => { handleUpdate(service._id) }} className='btn btn-warning'><i class="fa-solid fa-pen"></i></button>
                                <button onClick={() => { handleBookings(service.serviceName) }} className='btn btn-primary'><i class="fa-solid fa-folder-plus"></i></button>
                            </div>

                        </div>


                    </div>)
                }
            </div>


        </div>
    );
};

export default Services;