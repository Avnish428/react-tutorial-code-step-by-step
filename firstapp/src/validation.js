import React, { useState } from "react";

const Validation = () => {
    const [password, setPassword] = useState("")
    const [userName, setuserName] = useState("")
    const [errUsername, setErrUsername] = useState(false);
    const [errPassword, setErrPassword] = useState(false);

    const handleOnchangeUserName = (e) => {
        const item = e.target.value;
        if (item.length < 3) {
            setErrUsername(true)
        } else {
            setErrUsername(false)
        }
        setuserName(e.target.value)
    }

    const handleOnchangePassword = (e) => {
        const item = e.target.value;
        if (item.length < 3) {
            setErrPassword(true)
        } else {
            setErrPassword(false)
        }
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userName.length < 3 | password.length < 3) {
            alert("please fill all the fields")
        } else {
            alert("all good :)")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userName} placeholder="username" onChange={handleOnchangeUserName}></input>{errUsername ? <span style={{ color: "red" }}>please enter alteast three charaters</span> : null}
                <br /><br />
                <input type="text" value={password} placeholder="password" onChange={handleOnchangePassword}></input>{errPassword ? <span style={{ color: "red" }}>please enter alteast three charaters</span> : null}
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Validation;