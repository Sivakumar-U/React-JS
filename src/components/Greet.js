import React from 'react';
// function Greet(){
//     return <h1>Functional Component</h1>
// }
export const Greet=(props)=>{
    console.log(props)
    return (
        <div>
           <h1>
                Hello {props.name} {props.city}
           </h1>
            {props.children}
        </div>
    )
 
}

