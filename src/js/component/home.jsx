import React from "react";
import { useState } from "react";
//include images into your bundle
import SecondsCounter from "./SecondsCounter.jsx";
//create your first component
const Home = () => {
	
	const [ counter, setCounter] = useState(0);
	const [ counter1 , setCounter1 ] = useState(0)
	const [ counter2 , setCounter2 ] = useState(0)
	const [ counter3 , setCounter3 ] = useState(0)
	const [ counter4 , setCounter4 ] = useState(0)

	
	const containerOn = function(){
		clearInterval(interval);
		const newcounter = counter +1;
		setCounter( newcounter);
		if(counter == 9){
			clearInterval(interval);
			setCounter(0)
			const newcounter1 = counter1 + 1
			setCounter1( newcounter1)
		}
		if(counter1 == 9 ){
			setCounter1(0)
			const newcounter2 = counter2 + 1
			setCounter2( newcounter2)
		}
		if(counter2 == 9 ){
			setCounter2(0)
			const newcounter3 = counter3 + 1
			setCounter3( newcounter3)
		}
		if(counter3 == 9 ){
			setCounter3(0)
			const newcounter4 = counter4 + 1
			setCounter4( newcounter4)
		}
		
	}
	
		const interval = setInterval(containerOn,1000);
	
	


	return (
		< >
		<SecondsCounter counter={counter} counter1={counter1} counter2={counter2} counter3={counter3} counter4={counter4}  clickOn={containerOn}/>
		</>
	);
};

export default Home;
