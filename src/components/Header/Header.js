import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut} = useFirebase();
    const handleLogOut =()=>{
        logOut();
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Yamashiro Onsen</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                               <Link to='/home' ><span className='mx-2'>Home</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/services' ><span className='mx-2'>Services</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/foods' ><span className='mx-2'>Foods</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/addservice' ><span className='mx-2'>Add Service</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/addfood' ><span className='mx-2'>Add Food</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/carousals' ><span className='mx-2'>Carousals</span></Link>
                            </li>
                            <li class="nav-item">
                                {
                                    user.uid? <div><button onClick={handleLogOut} className='btn btn-danger'>Log Out</button> <span>{user.email}</span></div>:<Link to='/login' ><span className='mx-2'>Log In</span></Link>
                                }
                            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;