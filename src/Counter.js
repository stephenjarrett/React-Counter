import React from 'react';

// Counter is a React component
const Counter = ({finalValue, initialValue}) => {
    return(
        <div className="counter">
        {initialValue}
        </div>
    );
};

export default Counter;
