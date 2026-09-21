import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             <h1>welcome Vishvas</h1>
    //         </div>
    //     )
    //     }
    //     else{
    //         return(
    //             <div>
    //                 <h1>Welcome guest</h1>
    //             </div>
    //         )

    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>welcome Vishvas</div>

    // }
    // else {
    //     message=<div>welcome guest</div>
    // }

    
    return (
        this.state.isLoggedIn &&  <div>Welcome  Vishvas</div>
      
        // this.state.isLoggedIn?
        // (
        //     <div>welcome vishvas</div>
        // ):(
        //     <div>welcome Guest</div>
        // )
        
     
    )
  }
}
export default UserGreeting
