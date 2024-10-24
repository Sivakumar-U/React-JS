import React from 'react'

function NameList() {
    const persons=[
        {
            id:1,
            name:'vijay',
            age:22,
            skill:'Java'
        },
        {
            id:2,
            name:'ajay',
            age:23,
            skill:'python'
        },
        {
            id:3,
            name:'sujay',
            age:24,
            skill:'react'
        }
    ]
    
    const personList = persons.map(person=>(
        <h1>
            I am {person.name}.I am {person.age} years old. I know {person.skill}.
        </h1>
    ))
    return <div>{personList}</div>
 
}

export default NameList
