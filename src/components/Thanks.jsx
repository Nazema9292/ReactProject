import React, { Component } from "react";
class Thanks extends React.Component{
    render(){
        return <h1>Class Component
        <JoinUS />
        <JoinYou />
        </h1>
    }
}
class JoinUS extends React.Component{
    render(){
        return <h2>JoinUS</h2>
    }
}
class JoinYou extends React.Component{
    render(){
        return <h2>JoinYou</h2>
    }
}
export default Thanks;
export {JoinUS , JoinYou}