import React from 'react';
import Counter from './Counter';

const handleClick = () => {
	console.log('Clicked!');
	counterElements.push(
		<Counter finalValue='100' initialValue=
		{parseInt((Math.random()*100),10)-1} />
	)
	console.log(counterElements);
}

function convertNumToCounter(value) {
	return (
		<Counter initialValue={value} finalValue='100' />
	);
}

// Not quite the React way... global variables
let counterValues = [5,23,54,12,32];
let counterElements = counterValues.map(convertNumToCounter);


// App is a React Component
const App = () => {
	return (

		<div className="container">
			<button className='button' onClick={handleClick}>+</button>
			<div className="counter-box">
				{counterElements}
			</div>		
		</div>
);
};


export default App;
