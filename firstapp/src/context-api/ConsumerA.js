import React from "react";
import { ProviderState } from "./Provider";


const ConsumerA = () => {
    const { data, setData } = ProviderState();
 
    const updateName = () => {
        setData("Tomar")
    }
    return (
        <>
            <h1>Name:{data}</h1>
            <button onClick={updateName}>update counter</button>
        </>
    )
}

export default ConsumerA;