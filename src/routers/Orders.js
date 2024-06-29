import React , {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Page from '../components/Pages';
import ListPanel from '../components/Panel/ListPanel';

const Orders=(props)=>{
    const orders = useSelector(state => state.orders)
    const storestate = useSelector(state => state)
    

    
    const test=()=>{
        console.log('orders', orders)
        console.log('storestate', storestate)
    }
    return (
        <Page>
            {orders.map((list,index)=>
                <div>
                <ListPanel indx={index+1} key={index} list={list}/>
                </div>
            )}
            {/* <button onClick={test}>test</button> */}
        </Page>
    )
}
export default Orders