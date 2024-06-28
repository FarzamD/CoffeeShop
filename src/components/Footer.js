import React from 'react';
import ContactUs from './Footer/ContactUs';
import RelatedLinks from './Footer/RelatedLinks';
import QuickAccess from './Footer/QuickAccess';

export default class Footer extends React.Component{
    render=()=>(
    <footer className='Footer'>
        <div className='Footing'>
              <ContactUs className='footer-section'/>
              <RelatedLinks className='footer-section'/>
              <QuickAccess className='footer-section'/>
        </div>
    </footer>
    )
}