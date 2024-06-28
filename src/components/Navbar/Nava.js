import React from 'react';
import { NavLink } from 'react-router-dom';

const Nava=(props)=>(
    <NavLink to={props.to}
    activeClassName="is-active"
    exact={props.exact}
    className={props.className}>
        {props.children}
    </NavLink>
)
Nava.defaultProps={
    to:"/",
    exact: false,
    className:"nav-item"
}
export default Nava;