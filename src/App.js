import React from 'react';
import Counter from './Counter';

const App = () => {
	return (

		<div className="container">
			<button>+</button>
			<div className="counter-box">
				<Counter finalValue='100' initialValue='5' />
				<Counter finalValue='100' initialValue='23'/>
				<Counter finalValue='100' initialValue='54'/>
				<Counter finalValue='100' initialValue='12'/>
				<Counter finalValue='100' initialValue='32'/>
			</div>
			
		
		</div>
);
};


export default App;
