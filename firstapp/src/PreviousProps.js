import React, { useEffect, useRef } from "react";

const PreviousProps = (props) => {

    const lastValue = useRef();

    useEffect(() => {

        lastValue.current = props.count;
    })
    const previousValue = lastValue.current;
    return (
        <>
            <h1>new props:{props.count}</h1>
            <h1>previous Props:{previousValue}</h1>

        </>
    )
}

export default PreviousProps;