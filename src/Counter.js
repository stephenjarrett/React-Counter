import React from 'react';

// Rule #1: extend React.Component
class Counter extends React.Component {
    // Rule #4: Accept props in the
    // constructor method
    constructor(props) {
        super(props);
        
        // State is *my* stuff
        // It is always an object
        this.state = {
            currentValue: props.initialValue
        };
        
        setInterval(this._increaseValue, 1000);
    }

    // Always write helper fns as arrow 
    // fns
    // Keeps bugs away.. start custom fns
    // with _ first
    _increaseValue = () => {
        // Calculate the new current value
        let newCurrentValue = this.state.currentValue + 1;
        // Then set the new currentValue in state
        // but I must call this.setState
        //  I cannot alter this.state directly

        this.setState({
            currentValue: newCurrentValue
        });
    }
    
    // Rule #2: must have render method
    render() {
        //  Rule #3: must return some JSX
        //  or a call to React.createElement
        return (
            <div className='counter'>
                {this.state.currentValue}
            </div>
        );
    }
}

// old style without classes
// // Counter is a React component
// const Counter = ({finalValue, initialValue}) => {
//     return(
//         <div className="counter">
//         {initialValue}
//         </div>
//     );
// };

export default Counter;
