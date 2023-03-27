import React from 'react'

function List() {
    const persons = [
        {
            title: 'Ashish',
            desrciption: '28 year old front end developer',
            id: 1
        },
        {
            title: 'Shankar',
            desrciption: '23 year old back end developer',
            id: 2
        },
        {
            title: 'Fanak',
            desrciption: '35 year old Data Analyst',
            id: 3
        }
    ]
    const personList = persons.map(person => <div key={person.title}>I am {person.title}. I am {person.desrciption}.</div>)
    return (
        <div>{personList}</div>
    )
}

export default List