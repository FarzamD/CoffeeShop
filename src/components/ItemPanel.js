import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Amount from './Panel/Amount';
import { addItem2L, editItem2L, removeItem2L } from './redux/actions/list';

const ItemPanel = (props)=>{
    const {img, name, description, id} = props.item;
    const filterStateList=(state)=>{
        const storeList= state.list
        const item= storeList.find(litem=> litem.id===id)
        return item
    }
    const dispatch = useDispatch()
    const [amount, setAmount ]= useState(0);
    const item= useSelector(filterStateList)
    useEffect(() => {
        const newAmount= item? item.amount: 0 
        setAmount(newAmount)
    }, [item])
    const chAmount=(val)=>{
        if (amount+val===0) {
            setAmount(0)
            dispatch(removeItem2L(id))
        } else {
            const newAmount=amount+val
            dispatch(editItem2L(id,{amount:newAmount}))
            setAmount(newAmount)
        }
    }
    const addItem2List=()=>{
        setAmount(1)
        dispatch(addItem2L(id))
    }
    const add2List=()=>{
        const item= storeList.filter(litem=> litem.id===id)[0]
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
            <button onClick={add2List} >add to shopping list</button>
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