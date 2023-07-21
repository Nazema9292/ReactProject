import React, { Component } from 'react'

export default class First extends Component {
    clickMe(){
        alert('Welcome')
    }
    constructor(props){
    super(props)
    this.state={
      name:'super',
      title:'class'
    }
  }
  changestate(){
    this.setState({name:'Nazema',title:'Desai'})
  }
  render() {
    return (
      <div>
        {this.props.name} {this.props.title} <br></br>
        {this.state.name} {this.state.title} <br></br>
        <button onClick={()=>this.clickMe()}>Click Here</button><br/>
        <button onClick={()=>this.changestate()}>Change State</button>
      </div>
    )
  }
}
