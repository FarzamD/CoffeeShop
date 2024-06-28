import React from 'react';

const Panel = (props)=>(
    <div className='profile-panel'>
        <div className='faculty-info'>
            <img className='faculty-image' src={'../'+props.imgSrc}/>
            <div className='faculty-text-info'>
                <p className='faculty-name' title={props.name} >{props.name}</p>
                <p className='faculty-title'>{props.title}</p>
                <p className='faculty-office-Hours-title'>ساعت کاری:</p>
                <p className='faculty-office-Hours'>{props.officeHours}</p>
            </div>
        </div>
        <div className='faculty-contact-info'>
            <p className='faculty-email1'>{props.email1}</p>
            <p className='faculty-email2'>{props.email2}</p>
            <p className='faculty-number'>{props.number}</p>
        </div>
        <div className='faculty-farsi-info' >
            <a className='faculty-personal-page' href={props.personalPage1}>صفحه شخصی</a>
            <a className='faculty-personal-page' href={props.personalPage2}>صفحه شخصی</a>
            <p className='faculty-bio'>{props.bio}</p>
        </div>
    </div>
    //Personal page:
    //name
    // img
    //expertise
    //contact
    //qualifications
    //exp
    //bio
    //office hours
    //Extra-Curricular Activities:
    //Links to Resources
    //Social Media Links:
)
Panel.defaultProps={imgSrc:'./imgs/Ali.jpg'}
export default Panel;