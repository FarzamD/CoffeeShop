import React from 'react';
import { NavLink } from 'react-router-dom';

const Nava=(props)=>(
    <NavLink to={props.to}
    exact={JSON.stringify(props.exact)}
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