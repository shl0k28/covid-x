import React from 'react';

//custom styling
import { Card ,CardHeader ,CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaFacebook } from "react-icons/fa";
import '../.././styles.css';

function Login(props){
  return(
    <div className="shadow-lg">
      <Card>
        <CardHeader className="card-header-styling">
        Log In
        </CardHeader>
        <CardBody>
          <Form className="form-style">
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="name@provider.com" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <div className="row">
                  <div className="col-12 col-sm-4">
                    <Button className="button-styling">Login</Button>
                  </div>
                  <div className="col-sm-7">
                    <Button className="button-styling" href="/signup">
                      Not a member ? Sign Up
                    </Button>
                  </div>
                </div>
          </Form>
        </CardBody>
      </Card>          
    </div>
  )
}

export default Login;