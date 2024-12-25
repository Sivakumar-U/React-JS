import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {
    
  render() {
    const { Count, incrementCount } = this.props
    return <h2 onMouseOver={incrementCount}>
         Hover {Count} Counter</h2>
  }
}

export default UpdatedComponent(HoverCounter)
