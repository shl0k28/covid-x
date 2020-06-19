import React from 'react';

//Page Components
import About from './info/AboutComponent';
import Signup from './auth/SignupComponent';
import NavbarComponent from './NavbarComponent';

//custom styling
import '.././styles.css';

function SignupPage(props){
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
						<Signup />
					</div>
				</div>
			</div>
		</div>
	</>
	)
}

export default SignupPage;