import React from "react";
import { ProviderState } from "./Provider"


const ConsumerC = () => {
    const { count, setCount } = ProviderState();
    const updateCounter = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>counter:{count}</h1>
            <button onClick={updateCounter}>update counter</button>
        </>
    )
}

export default ConsumerC;