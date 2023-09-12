import React, { forwardRef } from "react";

const ForwardRefsubCompo = (props, refs) => {
    return (
        <>
            <h1>
            ForwardRefsubCompo
            </h1>
            <input type="text" ref={refs}></input>
        </>
    )
}

export default forwardRef(ForwardRefsubCompo);