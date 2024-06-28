import React, { useEffect } from 'react';
import Page from '../components/Pages';
import { useSelector } from 'react-redux';
import ItemPanel from '../components/ItemPanel';

//base component
const FastFoods= (props)=> {
    const items= useSelector(state=>state.items)
    const fast_foods= items.filter(({type})=> type==='fast food')
    return (
    <Page>
        <div className='profile-panels-section'>
            {fast_foods.map( (item, index)=>
                <ItemPanel key={index} item={item}/>
            )}
        </div>
    </Page>
)};

export default FastFoods;