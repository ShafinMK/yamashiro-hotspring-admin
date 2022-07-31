import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import HomeHeaderCarousals from './HomeHeaderCarousals';

const Carousals = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/carousals', data)
          .then(function (response) {
            console.log(response);
            reset();
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    return (
        <div className='container'>
            <h3 className='text-center'>Add image</h3>
           <div className="row justify-content-center">
               <div className="col-12 col-lg-8">
               <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input type="text" placeholder='Image Url' className='form-control' {...register("imgurl", { required: true })}/>
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className='mb-3'>
                    <select class="form-select" aria-label="Default select example" {...register("imgfor", { required: true })}>
                        <option selected>Carousal for</option>
                        <option value="Home Heading Carousal">Home Heading Carousal</option>
                        <option value="Products Carousal">Products Carousal</option>
                        <option value="Foods Carousal">Foods Carousal</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
               </div>
           </div>
           <div className='my-5'>
            <HomeHeaderCarousals></HomeHeaderCarousals>
           </div>
        </div>
    );
};

export default Carousals;