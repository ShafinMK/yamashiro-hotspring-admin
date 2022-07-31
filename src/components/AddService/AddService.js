import React from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios').default;

const AddService = () => {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(function (response) {
                console.log(response);
                if(response.data.insertedId){
                    alert('Service Added Successfully');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className='container my-5'>
            <h3 className='text-center'>Add Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Key</label>
                    <div className='col-sm-10'>
                        <input type="number" className='form-control' placeholder='' {...register("key", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Service Name</label>
                    <div className='col-sm-10'>
                        <input type="text" className='form-control' placeholder='' {...register("serviceName", { required: true })} />
                        {errors.serviceName && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Image URL</label>
                    <div className='col-sm-10'>
                        <input className='form-control' placeholder='' {...register("serviceThumb", { required: true },)} />
                        {errors.serviceThumb && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Introduction</label>
                    <div className='col-sm-10'>
                        <textarea className='form-control' {...register("intro", { required: true })} style={{height:'150px'}}/>
                        {/* <input type="text" className='form-control' placeholder='' {...register("intro", { required: true })} /> */}
                        {errors.intro && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Description</label>
                    <div className='col-sm-10'>
                        <textarea className='form-control' {...register("description", { required: true })} style={{height:'150px'}} />
                        {/* <input type="text" className='form-control' placeholder='' {...register("description", { required: true })} /> */}
                        {errors.description && <span>This field is required</span>}
                    </div>

                </div>

                <div className="mb-4 row">
                    <label className='col-sm-2'>Price</label>
                    <div className='col-sm-10'>
                        <input type="text" className='form-control' placeholder='' {...register("price", { required: true })} />
                        {errors.price && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Service Time</label>
                    <div className='col-sm-10'>
                        {/* <input type="text" className='form-control' placeholder='' {...register("time", { required: true })} /> */}
                        <select className='form-select w-100' {...register("time")}>
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
                        <button className='btn btn-success py-2 w-50'>Add Service</button>
                    </div>

                </div>




            </form>
        </div>
    );
};

export default AddService;