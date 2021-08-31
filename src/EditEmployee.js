import React from "react";

class EditEmployee extends React.Component{
    constructor(){
        super();
        this.eIdRef = React.createRef();
        this.eNameRef = React.createRef();
        this.state ={errorMsg:[]}
    }
      eventHandler=()=>{
        var errMsg =[]
        var checkName = parseInt(this.eNameRef.current.value)
        if(!isNaN(checkName) ){
            errMsg.push("Name cannot be a number")   
        }
        if(this.eNameRef.current.value == ""){
           errMsg.push("Invalid Name")
        }
        if(isNaN(this.eIdRef.current.value)){
            errMsg.push("Id Not a Number")
        }

        if(Number(this.eIdRef.current.value) <= 0){
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
        console.log(tempObj);
        this.props.oClick(tempObj)
     }

    render(){
        console.log(this.props.Data);
        var {Data} = this.props;
        return(
            <div>
               <h1> Edit Employee</h1>
               <form className="col-4">
                   <div className="row">
                    <label>
                        Employee Id
                    </label>
                    <input  className="form-control col-8"  defaultValue={Data.empId}
                    ref={this.eIdRef} />
                   </div>

                   <div className="row">
                    <label>
                        Employee Name
                    </label>
                    <input className="form-control col-8" defaultValue={Data.empName}
                     ref ={this.eNameRef}/>
                    
                   </div>
                   <div className="row">
                   <input type="button" value="Edit Employee"
                    onClick={this.eventHandler}/>
                   </div>
                   
               </form>
               {this.state.errorMsg.length >0  && <ul> {this.state.errorMsg.map((item,index)=> <li key={index}>{item}</li> ) }</ul>}
            </div>
        )
    }


}
export default EditEmployee;