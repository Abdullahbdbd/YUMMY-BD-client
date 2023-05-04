import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    
    if (loading) {
        return <div className='text-center my-5'>
            <Spinner animation="border" variant="warning" />
        </div>
    }


    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login"></Navigate>

};

export default PrivateRoute;