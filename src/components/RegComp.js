import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("Regular component render")
    return (
      <div>
        Regular Component {this.props.Name}
      </div>
    )
  }
}

export default RegComp
