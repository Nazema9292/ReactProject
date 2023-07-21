import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    greet(){
        alert('Hello Friends')
    }

  render() {
    return (
      <div>
        <Child greet={this.greet}/>
      </div>
    );
  }
}
