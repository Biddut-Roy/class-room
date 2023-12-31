import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import PropTypes from 'prop-types';




const PrivateRoute = ({children}) => {
    const location = useLocation()
    const { user , loading} = useContext(AuthContext)
    if (loading) {
        
        return <div className="text-center"><span className="loading loading-bars loading-lg items-center"></span></div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute ;