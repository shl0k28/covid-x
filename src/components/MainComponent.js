import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function Main(){
	return(
		<div>
			<BrowserRouter>
				<Switch>
					<Route path='/home' component={LoginPage} />
					<Route path='/signup' component={SignupPage} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Main;