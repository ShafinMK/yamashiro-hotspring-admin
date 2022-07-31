import React from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { signInwithGoogle} = useFirebase();
    const handleGoogleSignIn = ()=>{
        
    }
    return (
        <div className='container text-center'>
            Log in pageS
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="mb-3">
                    <input className='form-control' placeholder='Email' {...register("email", { required: true })} />
                    {errors.email && <span  className='text-danger'>Email required</span>}
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder='Password' {...register("password", { required: true })} />
                    {errors.password && <span className='text-danger'>Password is required</span>}
                </div>

                {/* errors will return when field validation fails  */}
                
                <div className="mb-3">
                    <button className='btn btn-primary' type='submit'>Log In</button>
                </div>
               
            </form>
            <div className="mb-4">
            <button onClick={signInwithGoogle} className='btn btn-light'>Sign in With Google</button>
            </div>
        </div>
    );
};

export default LogIn;