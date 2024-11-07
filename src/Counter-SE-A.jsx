import React from 'react';

const Button = ({text, handler, dis}) => {
    return (
        <button
            onClick={handler} 
            className={!dis ? 'button-primary' : 'button-disabled'}
            disabled={dis}
        >{text || 'button'}</button>
    )
}

export default function Counter(props) {
    let [counter, setCounter] = React.useState(props.init || 0)

    const inc = () => { 
        setCounter(prev => prev + 1) // setCounter(0+1)
        setCounter(prev => prev + 1) // setCounter(0+1)
        setCounter(counter + 1) // setCounter(0+1)
        // alert(`Counter: ${0}`)
        console.log(counter)
    }

    const dec = () => {
        setCounter(counter - 1)
        console.log(counter)
    }

    if(counter >= 10) {
        return (
            <>
                <h1>Counter Ended!</h1>
                <button onClick={() => setCounter(0)}>Start Again</button>
            </>
        )
    }

    return (
        <div
            style={{display: 'flex'}}
        >
            {/* <button 
                onClick={dec}
                disabled={counter === 0}
                className={counter > 0 ? 'button-primary' : 'button-disabled'}
            >-</button> */}
            <Button 
                text="-" 
                handler={dec} 
                dis={counter === 0}
            />
            <p>{counter}</p>
            {/* <button 
                onClick={inc}
                className='button-primary'
            >+</button> */}
            <Button text="+" handler={inc} />
            {counter >=9 && 
                <>
                <p>Be Careful! Counter will end at 10</p>
                <span>Last Warning!</span>
                </>
            }
        </div>
    )
}