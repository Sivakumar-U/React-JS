import React from 'react';
// function Greet(){
//     return <h1>Functional Component</h1>
// }
export const Greet=(props)=>{
    const {name, city} = props
    return (
        <div>
           <h1>
                Hello {name} {city}
           </h1>
        </div>
    )
 
}

