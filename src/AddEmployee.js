import React from "react";

class AddEmployee extends React.Component{
    constructor(){
        super();
        this.eIdRef = React.createRef();
        this.eNameRef = React.createRef();
        this.state ={errorMsg:[]}
    }
    addemployee=()=>{
        var errMsg =[]
        var checkName = parseInt(this.eNameRef.current.value)
        if(!isNaN(checkName) ){
            errMsg.push("Name cannot be a number")   
        }
        if(this.eNameRef.current.value == "" ){
           errMsg.push("Invalid Name")
        }
        if(isNaN(this.eIdRef.current.value)){
            errMsg.push("Id Not a Number")
        }
        if(Number(this.eIdRef.current.value) == 0){
            errMsg.push("Invalid Id")
             
         }
        if(errMsg.length > 0 )
        {
            this.setState({errorMsg:errMsg})
            return
        }
        var tempObj={
            empId:this.eIdRef.current.value,
            empName:this.eNameRef.current.value
        }   
        this.props.addEmpFunc(tempObj)
      
    }
    deleteemployee=()=>{

    }
    changeid=(event)=>{
        this.setState({empid:event.target.value})
    }
    changeName=(event)=>{
        this.setState({empName:event.target.value})
    }
    changeSalary=(event)=>{
        this.setState({empSal:event.target.value})
    }
    changeLocation=(event)=>{
        this.setState({empLoc:event.target.value})
    }

    render(){

        return(
            <div className="container-fluid">
               <h1> Add Employee</h1>
               <form className="col-4">
                   <div className="row">
                    <label>
                        Employee Id
                    </label>
                    <input type="text" className="form-control col-8"  defaultValue="Enter Id"
                     ref={this.eIdRef}/>
                   </div>

                   <div className="row">
                    <label>
                        Employee Name
                    </label>
                    <input type="text" className="form-control col-8" defaultValue="Enter a Name"
                    ref={this.eNameRef}/>
                    
                   </div>                  
                   <div className="row">
                       <input type="button" value="Confirm Add Employee"
                       onClick={this.addemployee}
                       className="btn btn-success" />

                       <input type="button" value="Delete Employee"
                       onClick={this.deleteemployee}
                       className="btn btn-danger" />
                 {/*   <p>
                       {this.state.empid}
                       {this.state.empName}
                       
                   </p> */}
                  
                                                         
                   </div>    
               </form>

               {this.state.errorMsg.length >0  && <ul> {this.state.errorMsg.map((item,index)=> <li key={index}>{item}</li> ) }</ul>}

            </div>
        )
    }


}
export default AddEmployee;