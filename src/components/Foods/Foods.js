import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFoods(data);
            })
    }, []);

    const handleUpdate = (id) => {
        navigate(`/updatefood/${id}`);
    }
    // delte food item
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure You want to Delete?');
        if(proceed){
            axios.delete(`http://localhost:5000/foods/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
                if(response.data.deletedCount>0){
                    alert('Deleted Successfully');
                    const remainingFoods = foods.filter(food => food._id !== id);
                    setFoods(remainingFoods);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
        
        
    } ;

    return (
        <div className='container'>
            <h1 className='text-center my-5'>Total Food items: {foods.length}</h1>
            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4'>
                {
                    foods.map(food => <div className='col'>

                        <div className="card">
                            <img src={food.foodThumb} alt="" className='img-fluid' style={{ height: '300px', width: '100%' }} />
                            <div className="card-body">
                                <h5 className='card-title'>{food.foodName}</h5>
                                {/* <p>{food.description}</p> */}
                            </div>
                            <div className='p-3'>
                                <button onClick={() => { handleDelete(food._id) }} className='btn btn-danger me-3'><i class="fa-regular fa-trash-can"></i></button>
                                <button onClick={() => handleUpdate(food._id)} className='btn btn-warning'><i class="fa-solid fa-pen"></i></button>
                            </div>

                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default Foods;