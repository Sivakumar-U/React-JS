import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {

    /* Fourth approach using amprecent (&&).*/
    return this.state.isLoggedIn && <diva>Welcome react life</diva>

    /* Third approach using terinary operator.
    return this.state.isLoggedIn ?(
        <div>Welcome react life</div>):(
        <div>Welcome guest</div>
        )*/

    
    /* Second approach by declaring variable using if-else to display data.
    let Message
    if(this.state.isLoggedIn){
        Message=<div>Welcome pythonlife</div>
    } else {
        Message=<div>welcome guest</div>
    }
    return<div>{Message}</div>*/
    
    
    /* First approach using if-else to display data.
    if(this.state.isLoggedIn){
        return <div>Welcome react life</div>
    } else{
        return <div>Welcome guest</div>
    }*/


    /* normal approach to display data.
    return (
        <div>
            <div>Welcome react life</div>
            <div>Welcome guest</div>
        </div>
      
    )*/
  }
}

export default UserGreeting
