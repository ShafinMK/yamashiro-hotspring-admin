import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateFood = () => {
    const { foodid } = useParams();
    const [food, setFood] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/updatefood/${foodid}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFood(data)
            })
    }, []);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.put(`http://localhost:5000/updatefood/${foodid}`, data)
            .then(function (response) {
                console.log(response);
                if (response.data.insertedId) {
                    alert('Food Updated Successfully');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className='container my-5'>
            {/* Update a food item {foodid} */}
            <h3 className='text-center my-5'>Update Food Item</h3>
            
            <div className="row">
                <div className="col-12 col-lg-6">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-4 row">
                            <label className='col-sm-2'>Food Name</label>
                            <div className='col-sm-10'>
                                <input type="text" className='form-control' defaultValue={food.foodName} {...register("foodName", { required: true })} />
                                {errors.foodName && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Image URL</label>
                            <div className='col-sm-10'>
                                <input className='form-control' defaultValue={food.foodThumb} {...register("foodThumb", { required: true },)} />
                                {errors.foodThumb && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Price</label>
                            <div className='col-sm-10'>
                                <input type="number" className='form-control' defaultValue={food.price} {...register("price", { required: true })} />
                                {errors.price && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Category</label>
                            <div className='col-sm-10'>
                                {/* <input type="text" className='form-control' defaultValue={food.} {...register("time", { required: true })} /> */}
                                <select className='form-select w-100' defaultChecked={food.time} {...register("time")}>
                                    <option defaultValue="Breakfast">Breakfast</option>
                                    <option defaultValue="Lunch">Lunch</option>
                                    <option defaultValue="Dinner">Dinner</option>
                                    <option defaultValue="Sncacks">Sncacks</option>

                                </select>
                                {errors.time && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Rating</label>
                            <div className='col-sm-10'>
                                {/* <input type="text" className='form-control' defaultValue={food.} {...register("time", { required: true })} /> */}
                                <select className='form-select w-100' value={food.rating} {...register("rating")}>
                                    <option defaultValue="1">1</option>
                                    <option defaultValue="2">2</option>
                                    <option defaultValue="2r">3</option>
                                    <option defaultValue="4">4</option>
                                    <option defaultValue="5">5</option>

                                </select>
                                {errors.rating && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Quantity</label>
                            <div className='col-sm-10'>
                                {/* <input type="text" className='form-control' defaultValue={food.} {...register("time", { required: true })} /> */}
                                <select className='form-select w-100' defaultChecked={food.quantity} {...register("quantity")}>
                                    <option defaultValue="1">1</option>
                                    <option defaultValue="2">2</option>
                                    <option defaultValue="2r">3</option>
                                    <option defaultValue="4">4</option>
                                    <option defaultValue="5">5</option>

                                </select>
                                {errors.quantity && <span>This field is required</span>}
                            </div>

                        </div>
                        <div className="mb-4 row">
                            <label className='col-sm-2'>Ordered Total</label>
                            <div className='col-sm-10'>
                                <input type="number" className='form-control' value={food.orderedTotal} {...register("orderedTotal")} />
                                {errors.orderedTotal && <span>This field is required</span>}
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
                <div  className="col-12 col-lg-6">
                <h4 className='text-center '>{food.foodName}</h4>
                    <img src={food.foodThumb} className='img-fluid' alt="" />
                </div>

            </div>
        </div>
    );
};

export default UpdateFood;