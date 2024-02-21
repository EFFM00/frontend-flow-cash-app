import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SUCCEEDED } from "../constants/status";

const AuthLayout = ({ children, authentication = true, roles = [] }) => {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if(authentication && authStatus === SUCCEEDED && authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== SUCCEEDED && authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])

    return loader ? null : <>{children}</>;
};

export default AuthLayout;
