import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ItemPanel from '../../components/ItemPanel';
import Page from '../../components/Pages';

//base component
const Sandwiches= (props)=> {
    const items= useSelector(state=>state.items)
    const sandwiches= items.filter(({type})=> type==='sandwich')
    return (
    <Page>
        <div className='profile-panels-section'>
            {sandwiches.map( (item, index)=>
                <ItemPanel key={index} item={item}/>
            )}
        </div>
    </Page>
)};

export default Sandwiches;