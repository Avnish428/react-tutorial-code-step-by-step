//useMemo hook is used for stopping unwanted component rerendering if component is rerendering without updation in any state may be due to some funtional call.its similar like pure components in class components.
import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const rerenderComponent = useMemo(() => {
        console.log("component rerendering")
        return count * 2
    }, [count])

    return (

        <>
            <h1>count:{count}</h1>
            <h1>item:{item}</h1>
            <h1>{rerenderComponent}</h1>
            <button onClick={() => { setCount(count + 1) }}>update count</button>
            <button onClick={() => { setItem(item + 1) }}>update item</button>
        </>
    )
}

export default UseMemoHook;