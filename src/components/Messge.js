import React, { Component } from "react";
class Messge extends Component {
    constructor(){
        super()
        this.state={
            Messge:'welcome visitor'
        }
    }
    changeMessage(){
        this.setState(
            {
                Messge:'Thanks for subscribing'
            }
        )
    }
    render(){
        return (
            <div>
                <h1>
                    {this.state.Messge}
                </h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
            
        )
    }
}

export default Messge