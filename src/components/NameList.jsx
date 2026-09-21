import React from 'react'
import Person from './Person'


const NameList = () => {
    // const names = ['shivani','ruhi','sonali']
    const persons = [
        {
            id:1,
            name:'shivani',
            age:20,
            skills:'react'
        },
        {
            id:1,
            name:'varu',
            age:20,
            skills:'react'
        },
        {
            id:1,
            name:'ashu',
            age:20,
            skills:'react'
        },
        {
            id:1,
            name:'ruhi',
            age:20,
            skills:'react'
        },
    ]
    // const nameList = names.map(name => <h2>{name}</h2>)
    // const personList = persons.map(person=>
    // (
    // <div>
    //     <h2>i am {person.name}</h2>
    //     <p>i am {person.age}</p>
    //     <p>{person.skills}</p>
    // </div>
    // )
    // )
    const personList = persons.map(person=>(
        <Person person={person}/>

    ))


  return (
    <>
    {personList}
    </>
    
        
            // {/* {nameList} */   
    
  )
}

export default NameList
