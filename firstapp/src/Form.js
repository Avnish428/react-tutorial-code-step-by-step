import React, { useState } from "react";
import "./App.css"
const Form = () => {
    const [name, setName] = useState("")
    const [options, setOptions] = useState("")
    const [interest, setInterest] = useState(false)

    const getData = (e) => {
        e.preventDefault()
        console.log(name, options, interest)
    }
    return (
        <div className="App">
            <form onSubmit={getData}>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input><br /><br />
                <select value={options} onChange={(e) => setOptions(e.target.value)}>
                    <option>select option</option>
                    <option>AC</option>
                    <option>DC</option>
                </select><br /><br />
                <input type="checkbox" value={interest} onChange={(e) => setInterest(e.target.checked)}></input><span>Accept Terms and Conditions</span><br /><br />
                <button>Submit</button>
                <button onClick={() => {
                    setName("")
                    setInterest(false)
                    setOptions("")
                }}>clear</button>
            </form>

        </div>
    )


}
export default Form;