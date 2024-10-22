import React from 'react';
// function Greet(){
//     return <h1>Functional Component</h1>
// }
export const Greet=({name, city})=>{
    return (
        <div>
           <h1>
                Hello {name} {city}
           </h1>
        </div>
    )
 
}

