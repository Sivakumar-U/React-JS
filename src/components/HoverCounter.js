import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count : 0
      }
    }

    incrementCount = ()=>{
        this.setState(prevState =>{
            return {Count : prevState.Count + 1}
        })
    }
    
  render() {
    const { Count } = this.state
    return <h2 onMouseOver={this.incrementCount}>Hover {Count} Counter</h2>
  }
}

export default HoverCounter
