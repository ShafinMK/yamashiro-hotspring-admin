import React, { useEffect, useState } from 'react';

const HomeHeaderCarousals = () => {
    const [images, setImages] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/carousals/?imgfor=Home Heading Carousal')
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            setImages(data);
        })
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        images.map(image => (
                            <div className='col'>
                                <img src={image.imgurl} className='img-fluid' alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeHeaderCarousals;