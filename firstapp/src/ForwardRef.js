import React, { useRef } from "react";
import ForwardRefsubCompo from "./ForwardRefsubCompo";
const ForwardRef = () => {
    const useref = useRef()

    function updateHandle() {
        useref.current.value = "1000";
        useref.current.focus();
        useref.current.style.color = "red"
    }
    return (
        <>
            <h>hello fromforward ref</h>
            <ForwardRefsubCompo ref={useref} />
            <button onClick={updateHandle}>update</button>
        </>
    )

}

export default ForwardRef;