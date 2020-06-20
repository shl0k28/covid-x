import React from 'react';
import {Navbar,NavbarBrand,NavLink} from 'reactstrap';

function NavbarComponent(){
	return(
		<>
			<Navbar className="nav-styling">
				<NavbarBrand className="nav-styling" href='/home'>
					COVID-X
				</NavbarBrand>
			</Navbar>
		</>
	)
}

export default NavbarComponent;