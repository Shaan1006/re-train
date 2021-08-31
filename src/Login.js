import React from "react";
import {Link} from "react-router-dom"
import { Icon, InlineIcon } from "@iconify/react";
import accountO from "@iconify-icons/zmdi/account-o";
import lockOutline from "@iconify-icons/zmdi/lock-outline";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {errorMsg:[]};
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  eventHandler=()=>{
    var errMsg = [];
    console.log(this.usernameRef.current.value)
    var checkName = parseInt(this.usernameRef.current.value);
    if (!isNaN(checkName)) {
      errMsg.push("Name cannot be a number");
    }
    if (this.usernameRef.current.value == "") {
      errMsg.push("Invalid Name");
    }
    
    
    if (this.passwordRef.current.value == "") {
      errMsg.push("Password Cannot be Empty");
    }
    
    if (errMsg.length > 0) {
      this.setState({ errorMsg: errMsg });
      return;
    }
    else{
      this.props.history.push("/")
    }



  }


  render() {
    return (
      <div className="wrapper">
        <div className="inner">
          <form>
          <h3>Login</h3>
            <div>
              <div className="form-holder">
                <Icon
                  icon={accountO}
                  style={{
                    position: "absolute",
                    top: "72%",
                    transform: "translateY(-50%)",
                    left: "17px",
                    fontSize: "17px",
                    color: "#999",
                  }}
                />
                <label>Username</label>
                <input
                  type="text"
                  required
                  className="form-control m-2"
                  ref={this.usernameRef}
                />
              </div>
              <div className="form-holder">
                <Icon
                  icon={lockOutline}
                  style={{
                    position: "absolute",
                    top: "72%",
                    transform: "translateY(-50%)",
                    left: "17px",
                    fontSize: "17px",
                    color: "#999",
                  }}
                />
                <label>Password</label>
                <input
                  type="password"
                  required
                  className="form-control m-2"
                  ref={this.passwordRef}
                />
              </div>
              <div>
                <input style={{marginRight:'10px',marginTop:'3px'}} type="checkbox" defaultChecked />
                  Rememeber me
              </div>
              <div>
                <input
                  type="button"
                  value="Login"
                  onClick={this.eventHandler}
                  className="btn btn-success m-2"
                />
                <input
                  type="reset"
                  value="Cancel"
                  className="btn btn-success m-2"
                />
              </div>
              <div>
                
                <Link to="/register"> New User?Sign Up</Link>
              </div>
            </div>
          </form>
          {this.state.errorMsg.length >0  && <ul> {this.state.errorMsg.map((item,index)=> <li key={index}>{item}</li> ) }</ul>}
        </div>
      </div>
    );
  }
}
export default Login;
