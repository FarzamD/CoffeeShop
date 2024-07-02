import React, { useEffect } from 'react';
import Page from '../components/Pages';
import { useSelector } from 'react-redux';
import ItemPanel from '../components/ItemPanel';
import Slider from '../components/Slider';
const sortFunc=(a,b)=>(
    b.amountSold - a.amountSold
);
const filterState=(state)=>{
    const storeItems= state.items;
    return storeItems.sort(sortFunc).slice(0, 12)
}
//base component
const Home= (props)=> {
    const items= useSelector(filterState)     
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