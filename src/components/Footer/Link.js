import React from "react";

const Link=(props)=>(
    <a href={props.link} className='footer-link footer-text'>
        {props.text}
    </a>
)
export default Link;