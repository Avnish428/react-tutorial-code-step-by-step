import React from "react";

export default class Student extends React.Component {

    render() {

        return (
            <>
                <div style={{ backgroundColor: 'skyblue' }}>
                    <h2>hello {this.props.name} with teacher{this.props.children}</h2>
                </div>
            </>
        )
    }
}