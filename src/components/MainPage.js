import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';
//Pages
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function Main(){
	return(
		<>
			<Switch>
				<Route path='/login' component={LoginPage}/>
				<Route path='/signup' component={SignupPage}/>
				<Redirect to='/login' />
			</Switch>
		</>
	)
}

export default Main;