import React, { Component } from "react";
import axios from 'axios'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.get('http://localhost:3008/welcome')
          .then(res=>{
            console.log(res);
            console.log(res.data);
            //window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
          })
      }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Not Signed in? <a href="/sign-up">SignUp</a>
                </p>
            </form>
        );
    }
}