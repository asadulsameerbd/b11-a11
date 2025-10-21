import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location =  useLocation()

    if(loading){
       return <Loading></Loading>
    }

    if(!user){
        return <Navigate state={{from:location}} to={'/login'} replace/>
    }
    return children;
};

export default PrivateRoutes;