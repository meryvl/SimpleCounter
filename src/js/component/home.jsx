import React from "react";
import { useState } from "react";
//include images into your bundle
import SecondsCounter from "./SecondsCounter.jsx";
//create your first component
const Home = () => {
	
	const [ counter, setCounter] = useState(0);
	const [ counter1 , setCounter1 ] = useState(0)
	const OnAdd = function(){
		const newcounter = counter +1 ;
		clearInterval(interval);
		setCounter( newcounter);
	}
	if(counter == 10){
		setCounter(0)
		const newcounter1 = counter1 + 1
		setCounter1( newcounter1)
	}
const interval=	setInterval(OnAdd,1000);

	return (
		< >
		<SecondsCounter counter={counter} counter1={counter1} clickon={OnAdd}/>
		</>
	);
};

export default Home;
