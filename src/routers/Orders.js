import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../components/Pages';

const Orders=(props)=>{
    const orders = useSelector(state => state.orders)
    const test=()=>{
        console.log('orders', orders)
    }
    return (
        <Page>
            <button onClick={test}>test</button>
        </Page>
    )
}
export default Orders