import React, { Component } from "react";
import axios from 'axios'

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.get('http://localhost:3008/search')
          .then(res=>{
            console.log(res);
            console.log(res.data);
            //window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
          })
      }

    render() {
        return (
            
            <form onSubmit = {this.handleSubmit}>

            <h2>Medicine Management System Application</h2>
            <div class="header">
            <a href="#default" class="logo">Main Menu</a>
                <div class="header-right">
                    <a class="active" href="#home">Search for nearest pharmacies.</a>
                    <a href="#contact">View Search Results.         </a>
                    <a href="#about">Add Pharmacy.</a>
                </div>
            </div>

                <h5>Search for Nearest Pharmacy</h5>

                <div className="form-group">
                    <label>Doctor Location/Address</label>
                    <input type="text" className="form-control" placeholder="Enter full address"/>
                </div>

                <div className="form-group">
                    <label>Medication Name</label>
                    <input type = "text" className="form-control" placeholder="Enter medication name" />
                </div>

                <div className="form-group">
                    <label>Nearest Pharmacy Location Radius</label>
                    <input type ="number" className="form-control" placeholder="0" />
                </div>

                <button type="Search" className="btn btn-primary btn-block">Search For Pharmacies</button>
                
            </form>
        );
    }
}