import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateService = () => {

    const { serviceid } = useParams();
    const [service, setService] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    // getting the previous data 
    useEffect(() => {
        fetch(`http://localhost:5000/updateservice/${serviceid}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const onSubmit = data => {
        console.log(data);
        axios.put(`http://localhost:5000/updateservice/${serviceid}`, data)
            .then(function (response) {
                console.log(response);
                if(response.data.modifiedCount>0){
                    alert('Service Updated Successfully');
                    reset();
                    navigate('/services')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };





    return (
        <div className='container'>
            Update a service {serviceid}

            <div className="row">
                <div className="col-12 col-lg-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Key</label>
                            <div className='col-sm-10'>
                                <input type="number" className='form-control' defaultValue={service.key} {...register("key", { required: true })} />
                                {errors.key && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Service Name</label>
                            <div className='col-sm-10'>
                                <input type="text" className='form-control' defaultValue={service.serviceName} {...register("serviceName", { required: true })} />
                                {errors.serviceName && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Image URL</label>
                            <div className='col-sm-10'>
                                <input className='form-control' defaultValue={service.serviceThumb} {...register("serviceThumb", { required: true },)} />
                                {errors.serviceThumb && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Introduction</label>
                            <div className='col-sm-10'>
                                <textarea className='form-control' defaultValue={service.intro} {...register("intro", { required: true })} style={{ height: '150px' }} />
                                {/* <input type="text" className='form-control' placeholder='' {...register("intro", { required: true })} /> */}
                                {errors.intro && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Description</label>
                            <div className='col-sm-10'>
                                <textarea className='form-control' defaultValue={service.description} {...register("description", { required: true })} style={{ height: '150px' }} />
                                {/* <input type="text" className='form-control' placeholder='' {...register("description", { required: true })} /> */}
                                {errors.description && <span>This field is required</span>}
                            </div>

                        </div>

                        <div className="mb-4 row">
                            <label className='col-sm-2'>Price</label>
                            <div className='col-sm-10'>
                                <input type="text" className='form-control' defaultValue={service.price} {...register("price", { required: true })} />
                                {errors.price && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Service Time</label>
                            <div className='col-sm-10'>
                                {/* <input type="text" className='form-control' placeholder='' {...register("time", { required: true })} /> */}
                                <select className='form-select w-100' {...register("time",  { required: true })}>
                                    <option value="40 min">40 min</option>
                                    <option value="1 hour">1 hour</option>
                                    <option value="1 hour 30 minutes">1 hour 30 minutes</option>
                                    <option value="2 hour">2 hour</option>
                                    <option value="3 hour">3 hour</option>
                                </select>
                                {errors.time && <span>This field is required</span>}
                            </div>

                        </div>


                        <div className="mb-4 row">
                            <div className='col-sm-2'></div>
                            <div className='text-center col-sm-10'>
                                <button className='btn btn-success py-2 w-50'>Update</button>
                            </div>

                        </div>




                    </form>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={service.serviceThumb} className={'img-fluid'} alt="" />
                </div>
            </div>

        </div>
    );
};

export default UpdateService;