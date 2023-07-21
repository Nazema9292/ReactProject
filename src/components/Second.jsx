import React from 'react';

function Second(props){
    function clickMe(){
        alert('Hello')
    }
    return (
        <div>
            Functional Component  <br></br>
            <button onClick={()=>clickMe()}>Click Me</button>
        </div>
    );
}

export default Second;