import React from 'react';
import { Navigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = (props) => {
    const {children} = props;
    const {user, isLoading} = useFirebase();
    // console.log(user.uid);
    const email = user.email;
    // console.log(user.email);
    if(isLoading){
        return 'Lodading';
    }
    else{
        return (email?children:<Navigate to='/login'/>);
    }
    
    
};

export default PrivateRoute;