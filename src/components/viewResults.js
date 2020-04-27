import React, { Component } from "react";
import axios from 'axios'

export default class ViewResults extends Component {

    constructor(props){
        super(props);
        this.state = { //state is by default an object
            students: [
                {id:'id',pharmacyName:'Pharmacy Name',pharmacyLocation:'Pharmacy Location',radius:'Radius',medicationName:'Medication Name'},
               { id:'1',pharmacyName: 'Best Care' , pharmacyLocation: '406 Rainbow Dr.', radius:10, medicationName: 'Ibuprofen' },
               { id:'2',pharmacyName: 'Active Health', pharmacyLocation: '221 Martin Dr.', radius: 11, medicationName: 'Ibuprofen' },
               { id:'3',pharmacyName: 'New Era Meds', pharmacyLocation: '515 Rose Dr.', radius: 15, medicationName: 'Ibuprofen' },
               { id:'4',pharmacyName: 'Local Pharmacy', pharmacyLocation: '231 Country Dr.', radius: 21, medicationName: 'Ibuprofen' }
            ]
         }
    }

      renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     renderTableData() {
        return this.state.students.map((student, index) => {
           const { pharmacyName, pharmacyLocation, radius, medicationName } = student //destructuring
           return (
              <tr key={pharmacyName}>
                 <td>{pharmacyName}</td>
                 <td>{pharmacyLocation}</td>
                 <td>{radius}</td>
                 <td>{medicationName}</td>
              </tr>
           )
        })
     }





    render() {
        return (

            




            <form onSubmit = {this.handleSubmit}>
            
            <h2>Medicine Management System Application</h2>
            <div class="header">
            <a href="#default" class="logo">Main Menu</a>
                <div class="header-right">
                    <a href="search">Search for nearest pharmacies.</a>
                    <a class="active" href="viewResults">View Search Results.</a>
                    <a href="#about">Add Pharmacy.</a>
                </div>
            </div>

            <div>
            <h1 id='title'>View Search Results</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
               

            </form>
        );
    }
}