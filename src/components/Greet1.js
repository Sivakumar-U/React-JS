import React, { Component } from "react";
class Greet1 extends Component {
    render(){
        return <h1>Class Component: Hello {this.props.name}
          {this.props.city}</h1>
    }
}

export default Greet1