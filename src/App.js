import React from 'react';
import Counter from './Counter';

// Moved this fn into react app
// const handleClick = () => {
// 	console.log('Clicked!');
// 	// counterElements.push(
// 	// 	<Counter finalValue='100' initialValue=
// 	// 	{parseInt((Math.random()*100),10)-1} />
// 	// )
// 	// console.log(counterElements);
// }

// function deleteCounterByID(theID) {
// 	console.log(theID);
// 	// let newCounterArray = this.state.counterValues;
// 	// let index = newCounterArray.id.findIndex(theID)
// 	// console.log(index);
// }

// function convertNumToCounter(obj) {
// 	return (
// 		<Counter 
// 		key={obj.id} 
// 		id={obj.id} 
// 		initialValue={obj.value} 
// 		doClick={deleteCounterByID} />
// 	);
// }

// Not quite the React way... global variables
// let counterValues = [5,23,54,12,32];
// let counterElements = counterValues.map(convertNumToCounter);

// Converting app fn to app class to keep track of #
// of counters
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			counterValues: [{id: 1 , value: 0}]
		};
	}
	
	_convertNumToCounter = (obj) => {
	return (
		<Counter 
		key={obj.id} 
		id={obj.id} 
		initialValue={obj.value} 
		doClick={this._deleteCounterByID} />
		);
	}

	_deleteCounterByID = (theID) => {
		// console.log(theID);
		let newCounterArray = this.state.counterValues.filter((obj) => {
			return obj.id !== theID;
		});

		this.setState({
			counterValues: newCounterArray
		})
	}

	_handleClick = () => {
		// console.log('Clicked!');
		let newObj = {
			id: (new Date()).getTime(),
			value: parseInt((Math.random() * 100), 10) - 1
		}

		this.setState({
			// Do not use .push... you cannot change the existing array so use concat to make a new array
			counterValues: this.state.counterValues.concat(newObj)
		});
	}

	render() {
		return (
			<div className="container">
			<button className='button' onClick={this._handleClick}>+</button>
			<div className="counter-box">
				{this.state.counterValues.map(this._convertNumToCounter)}
			</div>		
		</div>
		);
	}
}

// Old App as a function instead of class
// App is a React Component
// const App = () => {
// 	return (

// 		<div className="container">
// 			<button className='button' onClick={handleClick}>+</button>
// 			<div className="counter-box">
// 				{counterElements}
// 			</div>		
// 		</div>
// );
// };


export default App;
