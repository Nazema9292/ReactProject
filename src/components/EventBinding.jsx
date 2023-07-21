import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(){
        super()
        this.state={
            name:'Hello'
        }
    }
    changeState(){
        this.setState({name:'World'})
    }
  render() {
    return (
      <div>{this.state.name} <br/>
      <button onClick={()=>this.changeState()}>Click</button>
      </div>
    )
  }
}

