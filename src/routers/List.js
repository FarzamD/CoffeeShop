import React, { useState,useEffect } from 'react';
import Page from '../components/Pages';
import { useSelector, useDispatch } from 'react-redux';
import ItemPanel from '../components/ItemPanel';
import { deleteShoppingList } from '../components/redux/actions/list';
import { addList } from '../components/redux/actions/orders';
import { buyItems } from '../components/redux/actions/buyItems';

//base component
const ShoppingList= (props)=> {
    const storeItems= useSelector(state=>state.items)
    const storeOrders= useSelector(state=>state.orders)
    const storeList= useSelector(state=>state.list)
    const dispatch = useDispatch()
    const [items, setitems] = useState([])
    useEffect(() => {
        const IDs= storeList.map(({id})=>(id))
        const items=storeItems.filter(item=> IDs.includes(item.id));
        setitems(items)
    }, [storeList])

    // useEffect(() => {
    //     dispatch(deleteShoppingList())        
    // }, [storeOrders])

    const buy=()=>{
        // dispatch(buyItems(storeList))
        dispatch(addList(storeList))
        // dispatch(deleteShoppingList()) 
    }
    return (
    <Page>
        <div className='profile-panels-section'>
            {items.map( (item, index)=>
                <ItemPanel key={index} item={item}/>
            )}
        </div>
        <button onClick={buy} disabled={items.length===0}>buy</button>
    </Page>
)};

export default ShoppingList;