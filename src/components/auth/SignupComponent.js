import React from 'react';

//custom styling
import { Card ,CardHeader ,CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../.././styles.css';
import { FaFacebook } from "react-icons/fa";

function Signup(props){
	return(
		<div className="shadow-lg">
			<Card>
				<CardHeader className="card-header-styling">
				Sign Up
				</CardHeader>
				<CardBody>
					<Form className="form-style">
      					<FormGroup>
        					<Label for="email">Email</Label>
        					<Input type="email" name="email" id="exampleEmail" placeholder="name@provider.com" />
      					</FormGroup>
      					<FormGroup>
        					<Label for="confirmEmail">Confirm Email</Label>
        					<Input type="confirmEmail" name="confirmEmail" id="confirmEmail" placeholder="name@provider.com" />
      					</FormGroup>
      					<FormGroup>
        					<Label for="password">Password</Label>
        					<Input type="password" name="password" id="password" placeholder="Password" />
      					</FormGroup>
      					<FormGroup>
        					<Label for="confirmPass">Confirm Password</Label>
        					<Input type="confirmPass" name="confirmPass" id="confirmPass" placeholder="Confirm Password" />
      					</FormGroup>
      					<div className="row">
      						<div className="col-12 col-sm-4">
      							<Button className="button-styling">Sign Up</Button>
      						</div>
      						<div className="col-sm-7">
      							<Button className="button-styling">
      								Already a member ? Login
      							</Button>
      						</div>
      					</div>
					</Form>
				</CardBody>
			</Card>      		
		</div>
	)
}

export default Signup;