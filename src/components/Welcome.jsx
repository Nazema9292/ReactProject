import React from "react";

// function Welcome(){
//     return <h1>Welcome My App</h1>
// }

var Welcome = ()=>{
    return <h1>Function Component
    <JoinUS />
    <JoinYou />
    </h1>
}
function JoinUS(){
    return <h2>JoinUS</h2>
}
function JoinYou(){
    return <h2>JoinYou</h2>
}
export default Welcome;
export {JoinUS,JoinYou}