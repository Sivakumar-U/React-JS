import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  render() {
    const {Count, incrementCount} = this.props
    return <h2 onMouseOver={incrementCount}>Hover {Count} times</h2>    
  }
}

export default HoverCounterTwo
