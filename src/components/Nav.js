import React, { Component } from 'react';
import '../App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
					<div className='container'>
						<NavbarBrand href='/'>Panorama</NavbarBrand>
					</div>
				</Navbar>
      </div>
    )
  }
}

export default Nav;
