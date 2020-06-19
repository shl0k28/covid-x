import React from 'react';
import '../.././styles.css';

function Login(){
	return(
		<div>
			<div class="card shadow-lg">
  				<div class="card-header">
    				Login
  				</div>
  				<div class="card-body">
            <form className="form-style">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 offset-4">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
			</div>
		</div>
	)
}

export default Login;