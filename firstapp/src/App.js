import './App.css';
import React, { Component } from "react";
import ConsumerA from './context-api/ConsumerA';
import ConsumerB from './context-api/ConsumerB';
import ConsumerC from "./context-api/ConsumerC"

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }

//   }
//   render() {
//     return (
//       <div className='App'>
//         <Master />
//       </div>
//     )
//   }
// }


const App = () => {
  return (
    <div className='App'>
      <ConsumerC />
      <ConsumerB />
      <ConsumerA />
    </div>
  )
}

export default App