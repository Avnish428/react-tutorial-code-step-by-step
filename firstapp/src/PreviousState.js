import React, { useState } from "react";

const PreviousState = () => {
    const [count, setCount] = useState(0);
    const [previousCount, setPreviousCount] = useState()
    const updateCount = () => {
        const randomNumber = Math.floor(Math.random() * 10)
        setCount((previous) => {
            setPreviousCount(previous)
            return randomNumber
        })
    }
    return (

        <>
            <h1>New Count: {count}</h1>
            <h1>previous state:{previousCount}</h1>
            <button onClick={updateCount}>update count</button>
        </>
    )

}

export default PreviousState;