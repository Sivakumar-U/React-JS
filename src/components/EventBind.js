import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

      {/* Third approach to change the message from Hello to Good bye! using constructor. */}
      this.clickHandler=this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState(
            {
                message:'Good bye!'
            }
        )
        console.log(this)
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* First approach to change the message from Hello to Good bye! using bind after clicking on click button. 
        <button onClick={this.clickHandler.bind(this)}>click</button> */}
        
        {/* Second approach to change the message from Hello to Good bye! using arrow function.
        <button onClick={()=>this.clickHandler()}>click</button>*/}

        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default EventBind
