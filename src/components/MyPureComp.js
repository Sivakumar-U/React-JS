import React, { PureComponent } from 'react'

class MyPureComp extends PureComponent {
  render() {
    console.log("Pure component render")
    return (
      <div>
        Pure Component {this.props.Name}
      </div>
    )
  }
}

export default MyPureComp
