import React, { useState,useEffect } from 'react';
import Page from '../components/Pages';
import { useSelector, useDispatch } from 'react-redux';
import ItemPanel from '../components/ItemPanel';
import { deleteShoppingList } from '../components/redux/actions/list';
import { addList } from '../components/redux/actions/orders';
import { buyItems } from '../components/redux/actions/buyItems';
import { editItem } from '../components/redux/actions/Items';

const filterState=(state)=>{
    const storeItems= state.items 
    const storeList= state.list;
    const IDs= storeList.map(({id})=>(id));
    const items=storeItems.filter(item=> IDs.includes(item.id));
    return [storeList, items]
}
//base component
const ShoppingList= (props)=> {
    const [storeList, items]= useSelector(filterState)
    const dispatch = useDispatch()

    const buy=()=>{
        items.map(item=>{
            const amount= storeList.find(litem=>litem.id===item.id).amount
            const newAmount= amount+ item.amountSold
            dispatch(editItem(item.id,{amountSold:newAmount}))
        })
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