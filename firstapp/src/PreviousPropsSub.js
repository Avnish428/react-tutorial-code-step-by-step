import React, { useState } from "react"
import PreviousProps from './PreviousProps';
const PreviousPropsSub = () => {
    const [count, setCount] = useState(0);
    const updateCount = () => {
        const randomNumber = Math.floor(Math.random() * 10)
        setCount(randomNumber)
    }
    return (
        <>
            <PreviousProps count={count} />
            <button onClick={updateCount}>Update Count</button>
        </>
    )
}

export default PreviousPropsSub;