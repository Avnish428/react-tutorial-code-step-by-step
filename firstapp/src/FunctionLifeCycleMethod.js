import React, { useEffect, useState } from "react";

const FunctionLifeCycleMethod = () => {

    const [count, setCount] = useState(0);
    const [data, setdata] = useState("");
    const [res, setRes] = useState(true)
    const [resp, setResp] = useState(0)

    useEffect(() => {
        console.log("useeffect called")
        setResp(resp+1)
    }, [res])

    useEffect(() => {
        console.log("useEfeect 2nd called")
    }, [resp])

    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={() => { setRes(false) }}>update count</button>
        </div>
    )
}

export default FunctionLifeCycleMethod;