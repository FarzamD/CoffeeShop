import React from 'react';

export default class ContactUs extends React.Component{
    render(){
        return <div id='contact' className={"ContactUs "+ this.props.className}>
                <h2><a href='#contact'>Contact Us</a></h2>
                <p>address</p>
                <p>email</p>
                <p>number</p>
                <p>post code</p>
            </div>
    }
}