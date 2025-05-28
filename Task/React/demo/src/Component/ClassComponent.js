// Component: It's a block of code that can be reused in different parts of the application. First letter always capitalized.
// Render: It is used to display HTML elements on the screen.

import React,{ Component } from 'react';

class ClassComponent extends Component {
    render() {
        return(
            <div>
                <h1>Hello, This is Class Component</h1>
            </div>
        )
    }
}

export default ClassComponent




// RCE: React Class Component Export
// import React, { Component } from 'react'

// export class ClassComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h1>This is using RCE</h1>
//       </div>
//     )
//   }
// }

// export default ClassComponent




// RCC: React Class Component
// import React, { Component } from 'react'

// export default class ClassComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h1>This is using RCC</h1>
//       </div>
//     )
//   }
// }



