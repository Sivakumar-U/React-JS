import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Username:'',
       Comments:'',
       Topic:''
    }
  }

  handlerUsernameChange=(Event)=>{
    this.setState({
      Username:Event.target.value
    })
  }

  handleCommentsChange=(Event)=>{
    this.setState({
      Comments:Event.target.value
    })
  }

  handleTopicChange=(Event)=>{
    this.setState({
      Topic:Event.target.value
    })
  }
  
  handleSubmit=(Event)=>{
    alert(`${this.state.Username} ${this.state.Comments} ${this.state.Topic}`)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type='text' value={this.state.Username} onChange={this.handlerUsernameChange}></input>
      </div>
      <div>
        <label>Comments</label>
        <textarea value={this.state.Comments} onChange={this.handleCommentsChange}></textarea>
      </div>
      <div>
        <label>Topic</label>
        <select value={this.state.Topic} onChange={this.handleTopicChange}>
          <option value='react'>React</option>
          <option value='angular'>Angular</option>
          <option value='java'>Java</option>
        </select>
      </div>
      <button type='submit'>Submit</button>

      </form>
      
    )
  }
}

export default Form
