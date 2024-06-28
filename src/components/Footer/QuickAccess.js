import React from 'react';
import Link from './Link';

export default class QuickAccess extends React.Component{
    render(){
        return <div className={"QuickAccess "+ this.props.className}>
                <h2>QuickAccess</h2>
                <Link text='Link1'/>
                <Link text='Link2'/>
                <Link text='Link3'/>
                <Link text='Link4'/>
            </div>
    }
}