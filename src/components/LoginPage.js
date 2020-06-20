import React from 'react';

//Page Components
import About from './info/AboutComponent';
import Login from './auth/LoginComponent';
import NavbarComponent from './info/NavbarComponent';

//custom styling
import '.././styles.css';

function LoginPage(){
	return(
	<>
		<NavbarComponent />
		<div className="container-background align-self-center">		
			<div className="container login-component">
				<div className="row">
					<div className="col-12 col-sm-6">
						<About />
					</div>
					<div className="col-12 col-sm-6">
						<Login />
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default LoginPage;