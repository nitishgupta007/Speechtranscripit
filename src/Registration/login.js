import React, { Component } from 'react';

class Login extends Component {
    render() {
      return (
            <div>
                <form className="form-signin" _lpchecked="1">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Speech Recognition</h1>
                    </div>
                    
                    <div className="form-label-group">
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" autoComplete="off" />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>
                    
                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" autoComplete="off" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}

export default Login;
