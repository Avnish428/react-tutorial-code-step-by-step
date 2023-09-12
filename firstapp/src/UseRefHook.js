import React, { useRef } from "react";
//useRef hook is used to manipulate or customized the html element's attributes or properties.
const UseRefHook = () => {
    const useref = useRef()
    const updateHandle = () => {
        console.log(useref)
        useref.current.value = "0000"
        useref.current.focus()
        useref.current.style.color = "red"
    }
    return (
        <>
            <h1></h1>
            <input type="text" ref={useref}></input>
            <button onClick={updateHandle}>update</button>
        </>
    )
}

export default UseRefHook;