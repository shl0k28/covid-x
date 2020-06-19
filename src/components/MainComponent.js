import React from 'react';
import About from './info/AboutComponent';
import Login from './auth/LoginComponent';
import '.././styles.css';

function Main(){
	return(
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
	)
}

export default Main;