import React from 'react'

const FunClick = () => {
    function handleClick(){
        console.log("button clicked")
    }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FunClick
