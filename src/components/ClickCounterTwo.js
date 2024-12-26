import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    
  render() {
    const {Count, incrementCount} = this.props
    return <button onClick={incrementCount}>Clicked {Count} times</button>
  }
}

export default ClickCounterTwo
