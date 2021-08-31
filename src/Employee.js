import React from "react";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";


class Employee extends React.Component{
  
    constructor(){
        super();
        this.state = {showAddEmloyee:false,editEmployee:false,empDetails:{},empArr:[]};
        this.EmpValues={};
    }
    runMethod= ()=>{
        this.showAddEmloyee= true;
        this.setState ({showAddEmloyee:true});        
    }
    cancelMethod= ()=>{
        this.showAddEmloyee= true;
        this.setState ({editEmployee:false});
        
    }
    deleteMethod=(eId)=>{
       var pos =  this.state.empArr.findIndex(item => item.empId == eId)
      if (pos >= 0){
          var temp = [...this.state.empArr]
          temp.splice(pos,1)
          this.setState({empArr:temp})
      }
    }
    editMethod=(obj)=>{
        console.log("Details",obj);
        this.setState ({editEmployee:true,empDetails:obj});
    }

    eventTriggered=(p1)=>{
        alert("edit confirm event triggered")
        console.log("Edited data in Emp Component",p1)
        //var tempArr=this.state.empArr;// ref
        var tempArr=[...this.state.empArr];//copy
        var pos=tempArr.findIndex(item =>item.empId == p1.empId)
        if(pos >=0)
        {   
            
            tempArr[pos]=p1;
        }
        this.setState({empArr:tempArr,editEmployee:false});
    }
    
    addEmpTriggered=(p2)=>{
        console.log("New Data",p2)
        var tempArr=[...this.state.empArr];
        tempArr.push(p2)
         console.log(tempArr)
         let pos = tempArr.findIndex(item => item.empId === p2.empId)
         if(pos>0){
             alert("employee already exist")
             this.setState({showAddEmloyee:false})
         }
        this.setState({empArr:tempArr,showAddEmloyee:false})

    }
    employeeDetails=(item)=>{
        var pathUrl = "/employeedetails/" + item.empId;
        this.props.history.push(pathUrl,item)
    }
    /// called implicitly and after constuctor 
    render(){
        
        let tarr= this.state.empArr.map( item=>{
            return (
                <tr key={item.empId}>           
                    <td>{item.empId}</td>
                    <td> {item.empName}</td>
                    <td > 
                        <button value="edit" className="btn btn-success m-2" onClick={this.editMethod.bind(this,item)}> 
                        <i className="bi bi-person-x-fill"></i>
                        </button>
                        
                        <button value="edit" className="btn btn-danger m-2" onClick={this.deleteMethod.bind(this,item.empId)}> 
                        <i className="bi bi-file-earmark-x"></i>
                        </button>
                        <button value="details" className="btn btn-warning m-2" onClick={this.employeeDetails.bind(this,item)}> 
                        <i class="bi bi-card-text"></i>
                        </button>
                    </td>
                </tr>
            )
        })

       var  tableWidth =  {
        width: "40vw",
        height: "100%",
        
        
      };
        return (
            <div className="wrapper" >
                <div className="inner"style={tableWidth}>
                <h1 className='bg-transparent '>Employee Details </h1> 
                
                <table className="table bg-transparent " >
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {tarr}
                    </tbody>
                </table>

                <input type="button" className=" btn-success m-2 " value="Add New Employee"
                onClick={this.runMethod}/>
                <input type="button" className="btn-danger m-2"  value="Cancel Employee"
                onClick={this.cancelMethod}/>

                { this.state.showAddEmloyee && <AddEmployee addEmpFunc= {this.addEmpTriggered} ></AddEmployee>}
                {this.state.editEmployee && <EditEmployee oClick={this.eventTriggered} Data={this.state.empDetails}></EditEmployee>}
            </div>
            </div>
        )
    }
}
export default Employee;