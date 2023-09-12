import React, { useState } from "react";

const HideShow = () => {
    const [data, setData] = useState(true)
    return (
        <div>
            {data ? <h1>hello world</h1> : null}
            <button onClick={() => setData(!data)}>Hide and show</button>
        </div>
    )
}

export default HideShow;