import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const UseSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const age = searchParams.get("age")
    const city = searchParams.get("city")
    const name = searchParams.get("name")

    return (
        <>
            <h1>filter serach</h1>
            <h1>Age is :{age}</h1>
            <h1>City is:{city}</h1>
            <h1>Name is:{name}</h1>
            <input type="text" onChange={(e) => { setSearchParams({ name: e.target.value }) }} />
            <button onClick={() => { setSearchParams({ age: 10, city: "gwalior" }) }} >click to get query params</button>
        </>
    )
}

export default UseSearchParams;