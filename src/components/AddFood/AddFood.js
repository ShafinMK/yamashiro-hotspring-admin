import React from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios').default;

const AddFood = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/foods', data)
            .then(function (response) {
                console.log(response);
                if(response.data.insertedId){
                    alert('Food Added Successfully');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className='container'>
            <h1 className='text-center my-5'>Add New Food</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="mb-4 row">
                    <label className='col-sm-2'>Key</label>
                    <div className='col-sm-10'>
                        <input type="number" className='form-control' placeholder='' {...register("key", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>

                </div> */}
                <div className="mb-4 row">
                    <label className='col-sm-2'>Food Name</label>
                    <div className='col-sm-10'>
                        <input type="text" className='form-control' placeholder='' {...register("foodName", { required: true })} />
                        {errors.foodName&& <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Image URL</label>
                    <div className='col-sm-10'>
                        <input className='form-control' placeholder='' {...register("foodThumb", { required: true },)} />
                        {errors.foodThumb && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Price</label>
                    <div className='col-sm-10'>
                        <input type="number" className='form-control' placeholder='' {...register("price", { required: true })} />
                        {errors.price && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Category</label>
                    <div className='col-sm-10'>
                        {/* <input type="text" className='form-control' placeholder='' {...register("time", { required: true })} /> */}
                        <select className='form-select w-100' {...register("time")}>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Sncacks">Sncacks</option>
                            
                        </select>
                        {errors.time && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Rating</label>
                    <div className='col-sm-10'>
                        {/* <input type="text" className='form-control' placeholder='' {...register("time", { required: true })} /> */}
                        <select className='form-select w-100' {...register("rating")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="2r">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            
                        </select>
                        {errors.rating && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Quantity</label>
                    <div className='col-sm-10'>
                        {/* <input type="text" className='form-control' placeholder='' {...register("time", { required: true })} /> */}
                        <select className='form-select w-100' {...register("quantity")}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="2r">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            
                        </select>
                        {errors.quantity && <span>This field is required</span>}
                    </div>

                </div>
                <div className="mb-4 row">
                    <label className='col-sm-2'>Ordered Total</label>
                    <div className='col-sm-10'>
                        <input type="number" className='form-control' placeholder='' {...register("orderedTotal")} />
                        {errors.orderedTotal && <span>This field is required</span>}
                    </div>

                </div>

                <div className="mb-4 row">
                    <div className='col-sm-2'></div>
                    <div className='text-center col-sm-10'>
                        <button className='btn btn-success py-2 w-50'>Add Food</button>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default AddFood;