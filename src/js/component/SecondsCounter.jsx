import React from "react";

const SecondsCounter = (props) =>{
    return(
<>

<div class="text-white text-center">
    <div >
        <h1>React Counter</h1>
    <div class=" d-flex justify-content-center fs-1 p-3 m-3 bg-danger rounded">
        <div class="text-primary  me-3 p-2  bg-light border border-4  rounded" >{props.counter4}</div>
        <div class="text-warning  me-3 p-2 bg-light border border-4  rounded">{props.counter3}</div>
        <div class="text-success   me-3 p-2 border bg-light border-4  rounded">{props.counter2}</div>
        <div class="text-danger  me-3 p-2 border bg-light border-4 rounded">{props.counter1}</div>
        <div class="text-primary   me-3 p-2 border bg-light border-4 rounded">{props.counter}</div>
        </div>
    <button class="m-2 px-3 btn btn-info btn-outline-light rounded"  onClick={props.clickOn}>Click On</button>
    <button class="m-2 px-3 btn btn-info btn-outline-light rounded" onClick={props.clickStop}>Click stop</button>


    
</div>
</div>

</>
    )
}
export default SecondsCounter;
