import React from 'react';

// When to use State? 
// Multiple Return
// Condidtional Rendering
// State as Snapshot
// Component Reusability

const Button = ({text, handler, dis}) => {
    return (
        <button
            onClick={handler}
            className={dis ? 'button-disabled' : 'button-primary'}
            disabled={dis}
            >{text}</button>
    )
}

const ButtonDis = ({text}) => {
    return (
        <button
            className='button-disabled'
            disabled={true}
            >{text}</button>
    )
}

export default function Counter(props) {
    let [counter, setCounter] = React.useState(props.init || 0)

    const inc = () => { 
        setCounter(prev => prev + 1) // setCounter(0 + 1)
        // setCounter(prev => prev + 1) // setCounter(0 + 1)
        // setCounter(counter + 1) // setCounter(0 + 1)
        // alert(`Counter: ${counter}`)
        console.log(counter)
    }

    const dec = () => { 
        setCounter(counter - 1)
        console.log(counter)
    }

    if(counter >= 10) {
        return (
            <>
            <h1>Counter Reached its Max Value!</h1>
            <button onClick={() => setCounter(0)}>Restart</button>
            </>
        )
    }

    return (
        <div
            style={{display: 'flex'}}
        >
            <Button 
                text="-"
                handler={dec}
                dis={counter === 0}
            />
            {/* <button 
                onClick={dec}
                disabled={counter === 0}
                className={counter > 0 ? 'button-primary' : 'button-disabled'}
            >-</button> */}
            <p>{counter}</p>
            {/* <button 
                onClick={inc}
                className='button-primary'
            >+</button> */}
            <Button 
                text="+"
                handler={inc}
            />
            {counter >= 9 && 
                <>
                    <h3>Warning!</h3>
                    <p>Counter will end in next increment!</p>
                </>
            }
        </div>
    )
}