import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar dark expand='sm'>
				<NavbarBrand href='/' className='mr-auto brand'>
					<FontAwesomeIcon icon={faRedoAlt} style={{ color: '#88f9d4' }} />{' '}
					Panorama
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className='mr-2 toggleBoy' />
				<Collapse isOpen={!collapsed} navbar>
					<Nav>
						<NavItem>
							<NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/employees'>Employees</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav-link' to='/reviews'>Reviews</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
