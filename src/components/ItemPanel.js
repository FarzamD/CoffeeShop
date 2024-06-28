import React, {useState} from 'react';
import Amount from './Panel/Amount';

const ItemPanel = (props)=>{
    const {img, name, description} = props.item;
    const [amount, setAmount ]= useState(0);
    const chAmount=(val)=>{
        setAmount(amount+val)
        console.log(amount)
    }
    const addItem2List=()=>{
        setAmount(1)
        console.log('addItem2List')
    }
    return (
    <div className='profile-panel'>
        <div className='faculty-info'>
            <img className='faculty-image' src={'../'+img}/>
            <div className='faculty-text-info'>
                <p className='faculty-name' title={name} >{name}</p>
            </div>
        </div>
        <div>
            <p>{description}</p>
            <p>{props.item.type}</p>
            <Amount chAmount={amount?chAmount:addItem2List} amount={amount}/>
            <button onClick={()=>{console.log(JSON.stringify(props.item))}} >add to shopping list</button>
        </div>
        {/* <div className='faculty-farsi-info' >
            <a className='faculty-personal-page' href={props.personalPage1}>صفحه شخصی</a>
            <a className='faculty-personal-page' href={props.personalPage2}>صفحه شخصی</a>
            <p className='faculty-bio'>{props.bio}</p>
        </div> */}
    </div>
)}
ItemPanel.defaultProps={img:'./imgs/Ali.jpg'}
export default ItemPanel;