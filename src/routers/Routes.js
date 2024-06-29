import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from '../components/Pages';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItemPanel from '../components/ItemPanel';
import { useSelector } from 'react-redux';
import ColdDrinks from './ColdDrinks';
import HotDrinks from './HotDrinks';
import Cakes from './Cakes';
import FastFoods from './FastFoods';
import Sandwiches from './Sandwiches';
import Home from './Home';
import ShoppingList from './List';
import Orders from './Orders';
// import { connect } from 'react-redux';

//base component
const MainPage= ()=>{
    const items= useSelector(state=>state.items)
    return (
    <Page>
        {items.map(item=>
            <ItemPanel name={item.name} img={item.img} description={item.description}/>
        )}
    </Page>)};

const NotFound404= ()=>(<Page><div id='not-found-404'>404 page not found</div></Page>);
const Routers=()=> (
    <BrowserRouter>
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/hot-drinks" element={<HotDrinks/>} exact/>
            <Route path="/cold-drinks" element={<ColdDrinks/>} exact/>
            <Route path="/cakes" element={<Cakes/>}/>
            <Route path="/fast-foods" element={<FastFoods/>} exact/>
            <Route path="/sandwiches" element={<Sandwiches/>} exact/>
            
            <Route path="/list" element={<ShoppingList/>} exact/>
            <Route path="/orders" element={<Orders/>} exact/>
            {/* <Route path='*' element={<NotFound404/>}/> */}
            <Route path='*' element={<Home />}/>
        </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
);
export default Routers;