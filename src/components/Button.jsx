import React from 'react';

const Button = (props) => {

    let handleClick = () => {
        console.log(props.message)
    }
    
    return (
    <div>
        <button onClick={handleClick}>Submit</button>
    </div>
    )
}

export default Button;