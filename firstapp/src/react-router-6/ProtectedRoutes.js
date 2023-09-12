import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";



const ProtectedRoutes = (props) => {
    const { Component } = props;
    const navigate = useNavigate()
    useEffect(() => {
        const login = localStorage.getItem("login")
        if (!login) {
            navigate("/login")
        }
    })

    return (
        <>
            <Component />
        </>
    )
}

export default ProtectedRoutes; 