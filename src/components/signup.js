import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSelectedValue = this.onSelectedValue.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            email:'',
            pass:'',
            user_role: ''
        }
    }

    onChangeFirstName(e){
        this.setState({firstName:e.target.value})
    }
    
    onChangeLastName(e){
        this.setState({lastName:e.target.value})
    }
    
    onChangeEmail(e){
        this.setState({email:e.target.value})
    }
    
    onChangePassword(e){
        this.setState({pass:e.target.value})
    }
    
    onSelectedValue(e){
        this.setState({user_role:e.target.value})
    }

    // onSubmit = e=>{
    //     e.preventDefault()

        // const userObject = {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     password:this.state.pass,
        //     user_role:this.state.user_role
        // }

    //     axios.post('http://localhost:3008/welcome')
    //     .then((res) => {
    //         console.log(res.data)
    //     })

    //     this.setState({firstName:'',lastName:'',email:'',pass:'',user_role:''})
    // }

    onSubmit = event => {
        event.preventDefault();
        const userObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password:this.state.pass,
            user_role:this.state.user_role
        }
        axios.post('http://localhost:3009/registration',userObject)
          .then(res=>{
            console.log(userObject);
            console.log(res);
            console.log(res.data);
            //window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
          })
          .catch(err=>{
              console.log(err)
          })
        
          this.setState({firstName:'',lastName:'',email:'',pass:'',user_role:''})
      }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={this.onChangeFirstName} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={this.onChangeLastName}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.onChangeEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.onChangePassword}/>
                </div>

               {/* <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div> */}

                <div>
                    <select className="dropdown" value={this.state.user_role} onChange={this.onSelectedValue}> 
                        <option>Select Role</option>
                        <option value="doctor">Doctor</option>
                        <option value="pharmacist">Pharmacist</option>
                        <option value="receptionist">Receptionist</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}

export default SignUp