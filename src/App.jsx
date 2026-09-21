import React from "react"
import Greet from "./components/Greet"
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunClick from "./components/FunClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"
import UserGreeting from "./components/UserGreeting"
import NameList from "./components/NameList"


function App() {
  

  return (
    <>
    
    <NameList/>
    <UserGreeting/>
    {/* <ParentComponent/>
    <EventBind/>
    <ClassClick/>
    <FunClick/>
    <Counter/> */}
    {/* <Message/>
    <Greet name="shivani" heroName="srk"/>
    <Greet name="alice" heroName="Akshay"/>
    <Greet name="Rohat" heroName="Salman"/> */}
     
    </>
  )
}

export default App
