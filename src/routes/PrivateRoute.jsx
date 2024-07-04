import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const {pathname} = useLocation();

    console.log(loading);
    // console.log(user);

    if(loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={pathname} to = '/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateRoute;