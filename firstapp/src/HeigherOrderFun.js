import React, { useState } from "react"

const Demo = () => {
    const [count, setCount] = useState(0)
    const updateCounter = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>
                {count}
            </h1>
            <button onClick={updateCounter}>update counter</button>
        </>
    )
}

const HOF = (props) => {
    return (
        <h1 style={{ backgroundColor: "green",width:50 }}><props.fun /></h1>
    )
}
const HOFred = (props) => {
    return (
        <h1 style={{ backgroundColor: "red",width:50 }}><props.fun /></h1>
    )
}
const HOFblue = (props) => {
    return (
        <h1 style={{ backgroundColor: "blue",width:50}}><props.fun /></h1>
    )
}
export { HOF, Demo, HOFred, HOFblue };