import React, { useEffect } from 'react';
import Page from '../components/Pages';
import { useSelector } from 'react-redux';
import ItemPanel from '../components/ItemPanel';

//base component
const HotDrinks= (props)=> {
    const items= useSelector(state=>state.items)
    const hotDrinks= items.filter(({type})=> type==='drink')
    return (
    <Page>
        <div className='profile-panels-section'>
            {hotDrinks.map( (item, index)=>
                <ItemPanel key={index} item={item}/>
            )}
        </div>
    </Page>
)};

export default HotDrinks;