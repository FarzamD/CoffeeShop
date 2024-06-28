import React, { useEffect } from 'react';
import Page from '../components/Pages';
import { useSelector } from 'react-redux';
import ItemPanel from '../components/ItemPanel';

//base component
const ColdDrinks= (props)=> {
    const items= useSelector(state=>state.items)
    
    const coldDrinks= items.filter(({type})=> type==='cold drink')
    return (
    <Page>
        <div className='profile-panels-section'>
            {coldDrinks.map( (item, index)=>
                <ItemPanel key={index} item={item}/>
            )}
        </div>
    </Page>
)};

export default ColdDrinks;