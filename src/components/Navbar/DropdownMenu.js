import React from 'react';
import NavLink from './Nava';

class DropdownMenu extends React.Component {
  state = {isOpen: false, isFocused:false}
  
  toggleDropdown = () => {
    this.setState(prevState => ({  isOpen: !prevState.isOpen    })
    );
  }

  Close=()=>{this.setState(() => ({  isOpen: false    }));
  }
  Open=()=>{this.setState(() => ({  isOpen: true    }));
  }

  render() {
    const title = this.props.title;
    const links = this.props.links;
    const hrefs = this.props.hrefs;
    const { isOpen } = this.state;

    return (
      <div className="dropdown gpt-dropdown  nav-item"  
      // onFocus={this.Open} 
      // onBlur={setTimeout(this.Close,5000)}
      onMouseLeave={this.Close}
      >
        <button className="dropbtn button gpt-nav-link gpt-dropdown-toggle" 
        onClick={ this.toggleDropdown}
        >{title}</button>
        {isOpen && (
          <div className="dropdown-content gpt-dropdown-menu">
            {links.map((link, index) => (
              <NavLink to={hrefs && hrefs[index]} className='Navbar--links' key={index} >{link}</NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default DropdownMenu;
