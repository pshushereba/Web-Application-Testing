import React from 'react'

 const Display = (props) => {
    console.log("Display", props);
    return (
        <div>
            <h1>Count</h1>
            <p>Ball: {props.ball}</p>
            <p>Strike: {props.strike}</p>
        </div>
    )
}

export default Display;