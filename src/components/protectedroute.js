import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element, allowedRoles, ...rest }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/signin" />;
    }

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" />;
    }

    return <Route {...rest} element={element} />;
};

export default ProtectedRoute;