
import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:''
      }
    }
    handleUsernameChange = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentChange = (event) =>{
        this.setState({
            comments:event.target.value
        })
    }

    handleSubmit =(event)=>{
        alert(`${this.state.username} ${this.state.comments}`)
        event.preventDefault()
    }
    
  render() {
    return (
      <div>
        Form component

        <form onSubmit={this.handleSubmit}>
            <div>
                <label>UsserName</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                <p>{this.state.username}</p>


                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                    <p>{this.state.comments}</p>
                </div>

            </div>
            <button type="submit">Submit</button>
        </form>
        
      </div>
    )
  }
}

export default Form
