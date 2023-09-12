import React from "react";

export default class extends React.Component {
    constructor() {
        console.log("constructor called")
        //this will call first
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
          //this will call third
        console.log("componentDidMount is called")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate is called")
    }
    
    shouldComponentUpdate() {
        //this will called before component did update and if this will return true then only componentDidUpdate will call otherwise compoentDidUpdate will not call
        console.log("shouldComponentUpdate")
        return true
    }

    render() {
        console.log("render method called")
          //this will call second
        return (
            <div>
                <h1>count is {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>update count</button>
            </div>
        )
    }
}