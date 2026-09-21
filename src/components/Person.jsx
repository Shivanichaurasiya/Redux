import React from 'react'

const Person = ({person}) => {
  return (
    <div>
        <h2> i am {person.name}. I am {person.age} years old. I know {person.skills}</h2>
      
    </div>
  )
}

export default Person
