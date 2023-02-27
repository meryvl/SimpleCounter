import React from "react";

const SecondsCounter = (props) =>{
    return(
<>

<div class="bg-dark bg-gradient text-white text-center ">
    <div >
        <h1>React Counter</h1>
    <div class="d-flex p-5">
        <div>{props.counter1}</div>
        <div>{props.counter}</div>
        </div>
    <button onClick={props.clickOn}>Click On</button>
    <button>Click stop</button>


    
</div>
</div>

</>
    )
}
export default SecondsCounter;
