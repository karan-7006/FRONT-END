// Function: It's a block of code that performs a specific task. First letter always lowercase.
// Similar to a Class Component, but it is a simpler way to create components in React. It does not have lifecycle methods and does not use `this` keyword.

import React from 'react';
function FunctionComponent() {
    return (
        <div>
            <h1>Hello, This is Function Component</h1>
        </div>
    );
}
export default FunctionComponent;




// using arrow function syntax
// import React from 'react';
// const FunctionComponent = () => {
//     return (
//         <div>
//             <h1>Hello, This is Function Component</h1>
//         </div>
//     );
// };
// export default FunctionComponent;




// RFCE: React Function Component Export
// import React from 'react'

// function FunctionComponent() {
//   return (
//     <div>
//       <h1>This is using RFCE</h1>
//     </div>
//   )
// }

// export default FunctionComponent




// RFC: React Function Component
// import React from 'react'

// export default function FunctionComponent() {
//   return (
//     <div>
//       <h1>This is using RFC</h1>
//     </div>
//   )
// }




// RAFC: React Arrow Function Component
// import React from 'react'

// const FunctionComponent = () => {
//   return (
//     <div>
//       <h1>This is using RAFC</h1>
//     </div>
//   )
// }

// export default FunctionComponent




// RAFCE: React Arrow Function Component Export
// import React from 'react'

// const FunctionComponent = () => {
//   return (
//     <div>
//       <h1>This is using RAFCE</h1>
//     </div>
//   )
// }

// export default FunctionComponent


