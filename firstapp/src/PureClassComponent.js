
import React,{PureComponent} from "react"

//pure component stop the rerendering of component if none of the states are updating in some functional calls still there is rerendering of that component we can use pure component.in functional components we use useMemo hook for achieving this behaviour.below are two exmaple dipicting the pure component functionality. 

export default class PureClassComponent extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        console.log("rerendering")
        return (
            <>
                <h1>
                    count: {this.state.count}
                </h1>
                <button onClick={() => this.setState({ count: this.state.count})}>update count</button>
            </>
        )
    }

}


// export default class PureClassComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         console.log("rerendering")
//         return (
//             <>
//                 <h1>
//                     count: {this.state.count}
//                 </h1>
//                 <button onClick={() => this.setState({ count: this.state.count})}>update count</button>
//             </>
//         )
//     }

// }