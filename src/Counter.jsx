import React from 'react';

export default function Counter(props) {
    let [counter, setCounter] = React.useState(props.init || 0)

    // let counter = 10;
    const inc = () => { 
        setCounter(counter + 1)
        console.log(counter)
        // alert('Increment')
    }

    const dec = () => { 
        // alert('Decrement')
        // counter--
        setCounter(counter - 1)
        console.log(counter)
    }

    return (
        <div
            style={{display: 'flex'}}
        >
            <button 
                onClick={dec}
                disabled={counter === 0}
                className={counter > 0 ? 'button-primary' : 'button-disabled'}
            >-</button>
            <p>{counter}</p>
            <button 
                onClick={inc}
                className='button-primary'
            >+</button>
        </div>
    )
}