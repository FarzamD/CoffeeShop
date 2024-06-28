import React, { useEffect } from 'react';
import Page from '../components/Pages';
import { useSelector } from 'react-redux';
import ItemPanel from '../components/ItemPanel';
import Slider from '../components/Slider';

//base component
const Home= (props)=> {
    const storeItems= useSelector(state=>state.items)
    const items= storeItems.sort((a,b)=>a.amountSold-b.amountSold).slice(0, 12)
    return (
    <Page>
        <Slider/>
        <div className='profile-panels-section'>
            {items.map( (item, index)=>
                <ItemPanel key={index} item={item}/>
            )}
        </div>
    </Page>
)};

export default Home;