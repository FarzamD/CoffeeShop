import React from 'react';
import Dropdown from './Navbar/DropdownMenu'
import NavLink from './Navbar/Nava';

const Logo = (props) => {
  return <img className="logo" src={props.logoPath} alt="School Logo" />
}

export default class Navigation extends React.Component {
  links= [
    // 'faculty', 
    'hot drinks', 'cold drinks', 'cakes', 'fast food', 'sandwiches']
  hrefs=[ 
    // '/faculty',
    "/hot-drinks", "/cold-drinks",
    "/cakes", "/fast-foods",
    "/sandwiches"]
  Dropdowns=[
		{title:'Menu', links:this.links, href:this.hrefs},
	    ]
  render(){return (
//navbar
    <nav>
      <ul className='Navbar gpt-navbar-nav'>
        <NavLink exact={true}>Home</NavLink>
        {this.Dropdowns.map((dropdown, index) => (
          <Dropdown title={dropdown.title} links={dropdown.links} hrefs={dropdown.href} key={index} />))
        }
        <NavLink to='/Events'>orders</NavLink>
        <NavLink to='/blog'>shoping list</NavLink>
        <NavLink to='#contact'>login</NavLink>
      </ul>
    </nav>
    );
  } 
}