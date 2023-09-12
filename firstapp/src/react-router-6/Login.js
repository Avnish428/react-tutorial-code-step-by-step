import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar";

const Login = () => {
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem("login", true)
        navigate("/")
    }

    useEffect(() => {
        const login = localStorage.getItem("login")
        if (login) {
            navigate("/")
        }
    })

    return (
        <>
            <h1>Login</h1>
            <input type="text"></input><br /><br />
            <input type="text"></input><br /><br />
            <button onClick={login}>submit</button>
        </>
    )
}

export default Login;