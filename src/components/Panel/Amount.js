import React from 'react'

const Amount=(props)=>{
    const {amount}= props
    const increaseAmount=()=>{
        props.chAmount(+1)
    }
    const decreaseAmount=()=>{
        props.chAmount(-1)
    }
    return (
        <div className='item-amount'>
            <button onClick={decreaseAmount} disabled={amount<1}>-1</button>
            <p>{amount}</p>
            <button onClick={increaseAmount}>+1</button>
        </div>
    )
}

export default Amount