import React from "react"
import Greet from "./components/Greet"
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunClick from "./components/FunClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"

function App() {
  

  return (
    <>
    <ParentComponent/>
    <EventBind/>
    <ClassClick/>
    <FunClick/>
    <Counter/>
    {/* <Message/>
    <Greet name="shivani" heroName="srk"/>
    <Greet name="alice" heroName="Akshay"/>
    <Greet name="Rohat" heroName="Salman"/> */}
     
    </>
  )
}

export default App
