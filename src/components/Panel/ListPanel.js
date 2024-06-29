import React, {useState, useEffect} from 'react'
import ItemPanel from '../ItemPanel'
import { useSelector, useDispatch } from 'react-redux';

const ListPanel=(props)=>{
    const storeItems= useSelector(state=>state.items)
    const [list, setList]=  useState(props.list.list)
    const [items, setitems] = useState([])
    useEffect(() => {
        const IDs= list.map(({id})=>(id))
        const items=storeItems.filter(item=> IDs.includes(item.id));
        setitems(items)
    }, [])
    return (
        <div className='list-panel'>
            <p className='order-number'>{`order ${props.indx}`}</p>
            <div className='list-panel-items'>
                {items.map((item, index)=>
                    <ItemPanel key={index} item={item}/>
                )}
            </div>
        </div>
    )
}
export default ListPanel