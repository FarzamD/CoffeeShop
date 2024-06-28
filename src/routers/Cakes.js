import React, { useEffect } from 'react';
import Page from '../components/Pages';
import { useSelector } from 'react-redux';
import ItemPanel from '../components/ItemPanel';

//base component
const Cakes= (props)=> {
    const items= useSelector(state=>state.items)
    const cakes= items.filter(({type})=> type==='cake')
    return (
    <Page>
        <div className='profile-panels-section'>
            {cakes.map( (item, index)=>
                <ItemPanel key={index} item={item}/>
            )}
        </div>
    </Page>
)};

export default Cakes;