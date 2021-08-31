import React from 'react'

class EmployeeDetails extends React.Component{
           

    goBack=()=>{

        this.props.history.goBack();
    }

    render(){
        console.log(this.props)
        var empId = this.props.match.params.empId
        var {empName} = this.props.location.state;
        return(
            <React.Fragment>
              <h1>Employee Details</h1>
             <h3 className="m-2"> Employee Id  :{empId}</h3>
             <h3> Employee Name : {empName}</h3>
             <button type="button" name="button" className="btn btn-success m-2" onClick={this.goBack}> Go Back</button>
            </React.Fragment>
            
        )
    }
}
export default EmployeeDetails


