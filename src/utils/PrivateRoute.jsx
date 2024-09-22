/* eslint-disable no-unused-vars */
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children, ...rest}) => {
    const [token, setToken]= useContext(AuthContext)

    return !token ? <Navigate to='/login'/> : children;
}

export default PrivateRoute;