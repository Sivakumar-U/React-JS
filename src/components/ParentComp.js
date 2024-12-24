import React, { Component } from 'react'
import RegComp from './RegComp'
import MyPureComp from './MyPureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Name:'Siva Reddy'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                Name:'Siva Reddy'
            })
        },2000)
    }
    
  render() {
    console.log("******Parent component render******")
    return (
      <div>
        Parent Component
        <MemoComp Name={this.state.Name}/>
        {/* <RegComp Name={this.state.Name}/>
        <MyPureComp Name={this.state.Name}/> */}
      </div>
    )
  }
}

export default ParentComp
