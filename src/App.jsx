import React from "react"
import Greet from "./components/Greet"
import Message from "./components/Message"

function App() {
  

  return (
    <>
    <Message/>
    <Greet name="shivani" heroName="srk"/>
    <Greet name="alice" heroName="Akshay"/>
    <Greet name="Rohat" heroName="Salman"/>
     
    </>
  )
}

export default App
