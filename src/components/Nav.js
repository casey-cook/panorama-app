import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

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
							<NavLink href='/'>Dashboard</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/'>Employees</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/'>Reviews</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
