import React from "react";
import "../../styles/index.css";
import { useState, useEffect, useMemo } from "react";

const SecondsCounter = () =>{

	const [ counter, setCounter] = useState(0);
	const [ counter1 , setCounter1 ] = useState(0);
	const [ counter2 , setCounter2 ] = useState(0);
	const [ counter3 , setCounter3 ] = useState(0);
	const [ counter4 , setCounter4 ] = useState(0);
    const [onOff, setOnOff] = useState(false)
let intervalId;
const counterOne=()=>{
setCounter((counter) => counter + 1);
}
useEffect(()=>{
	if(onOff){
		intervalId = setInterval(counterOne, 1000);  
	}
    return () => clearInterval(intervalId);
},[counter, onOff])

const start = ()=>{
setOnOff(!onOff)
}

const restore = () => {
    setCounter(0);
    setCounter1(0);
    setCounter2(0);
    setCounter3(0);
    setCounter4(0);
    setOnOff(false)
  };

if(counter == 10){
	setCounter(0)
	const newcounter1 = counter1 + 1
	setCounter1( newcounter1)
}	
if(counter1 == 10 ){
	setCounter1(0)
	const newcounter2 = counter2 + 1
	setCounter2( newcounter2)
}
if(counter2 == 10){
	setCounter2(0)
	const newcounter3 = counter3 + 1
	setCounter3( newcounter3)
}
if(counter3 == 10 ){
	setCounter3(0)
	const newcounter4 = counter4 + 1
	setCounter4( newcounter4)
}

    return(
<>

<div class="text-white text-center">
    <div >
        <h1>React Counter</h1>
    <div class=" d-flex justify-content-center fs-1 p-3 m-3 bg-danger rounded">
        <div class="text-primary  me-3 p-2  bg-light border border-4  rounded" >{counter4}</div>
        <div class="text-warning  me-3 p-2 bg-light border border-4  rounded">{counter3}</div>
        <div class="text-success   me-3 p-2 border bg-light border-4  rounded">{counter2}</div>
        <div class="text-danger  me-3 p-2 border bg-light border-4 rounded">{counter1}</div>
        <div class="text-primary   me-3 p-2 border bg-light border-4 rounded">{counter}</div>
        </div>
    <button class="m-2 px-3 btn btn-info btn-outline-light rounded" onClick={start}  >Start / Stop</button>
    <button class="m-2 px-3 btn btn-info btn-outline-light rounded" onClick={restore}>Restore</button>
    <div className="button">
        
      </div>

    
</div>
</div>

</>
    )
}
export default SecondsCounter;
