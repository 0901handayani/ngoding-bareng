import React, { useState } from "react";

function Counters (){
    const [number, setNumber]= useState(100);
    return (
        <React.Fragment>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>+</button>
            <button onClick={() => setNumber(number - 1)}>-</button>
            <button onClick={() => setNumber(number / 2)}>/</button>
            <button onClick={() => setNumber(number * 2)}>*</button>
        </React.Fragment>
    )
}
export default Counters;