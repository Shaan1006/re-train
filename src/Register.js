import React from "react";
import "./Register.css";
import Background from "./registration.jpg";
import { Icon, InlineIcon } from "@iconify/react";
import accountO from "@iconify-icons/zmdi/account-o";
import lockOutline from "@iconify-icons/zmdi/lock-outline";
import pinIcon from "@iconify-icons/zmdi/pin";
import faceIcon from '@iconify-icons/zmdi/face';
import caretDown from "@iconify-icons/zmdi/caret-down";
import validator from 'validator'

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      countryName: [
        "India",
        "Australia",
        "Malaysia",
        "Singapore",
        "Phillipines",
      ],errorMsg:[]
    };
    this.usernameRef = React.createRef();
    this.emailRef    = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
    this.countryref = React.createRef();
  
  }

  eventHandler = () => {
   // event.preventDefault();
    var errMsg = [];
    console.log(this.usernameRef.current.value)
    var checkName = parseInt(this.usernameRef.current.value);
    if (!isNaN(checkName)) {
      errMsg.push("Name cannot be a number");
    }
    if (this.usernameRef.current.value == "") {
      errMsg.push("Invalid Name");
    }
    
    if(this.emailRef.current.value == "") {
      errMsg.push("Email is empty");
    }

    if(!(validator.isEmail(this.emailRef.current.value))){
      errMsg.push("Invalid Email");
    }
    if (this.passwordRef.current.value == "") {
      errMsg.push("Password Cannot be Empty");
    }
    
    if (this.confirmPasswordRef.current.value == "") {
      errMsg.push("confirm Password Cannot be Empty");
    }
    
    if (this.confirmPasswordRef.current.value != this.passwordRef.current.value) {
      errMsg.push("Passwords don't Match");
    }

    if (errMsg.length > 0) {
      this.setState({ errorMsg: errMsg });
      return;
    }
    else{
      this.props.history.push("/")
    }
    
    
  };

  render() {
    var optionArray = this.state.countryName.map((item,index) => {
      return <option key={index} >{item}</option>;
    });

    var sectionStyle = {
      width: "100%",

      backgroundImage: `url(${Background})`,
    };

    return (
      <div className="wrapper">
        <div className="inner">
          <form>
            <h3>Register</h3>

            <div className="form-group">
              <div className="form-wrapper">
                <label>Username</label>
                <div className="form-holder">
                  <Icon
                    icon={accountO}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "14px",
                      fontSize: "17px",
                      color: "#999",
                    }}
                  />
                  <input
                    type="text"
                    required
                    
                    className="form-control"
                    ref={this.usernameRef}
                    required
                  />
                </div>
              </div>
              <div className="form-wrapper">
                <label >Email</label>
                <div className="form-holder">
                  <i>@</i>
                  <input type="text" required ref={this.emailRef} className="form-control" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="form-wrapper">
                <label >Password:</label>
                <div className="form-holder">
                  <Icon
                    icon={lockOutline}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "14px",
                      fontSize: "17px",
                      color: "#999",
                    }}
                  />
                  <input
                    ref={this.passwordRef}
                    type="password"
                    className="form-control"
                    placeholder="********"
                    required
                  />
                </div>
              </div>
              <div className="form-wrapper">
                <label >Confirm Password:</label>
                <div className="form-holder">
                  <Icon
                    icon={lockOutline}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "14px",
                      fontSize: "17px",
                      color: "#999",
                    }}
                  />
                  <input
                    type="password"
                    className="form-control"
                    ref={this.confirmPasswordRef}
                    placeholder="********"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-wrapper">
                <label >Country:</label>
                <div className="form-holder ">
                  <Icon
                    icon={pinIcon}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "14px",
                      fontSize: "17px",
                      color: "#999",
                    }}
                  />
                  <select className="form-control" >{optionArray}</select>
                  <Icon
                    icon={caretDown}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "14px",
                      fontSize: "17px",
                      color: "#999",
                    }}
                  />
                </div>
              </div>
              <div className="form-wrapper">
                <label >Gender:</label>
                <div className="form-holder ">
                  <Icon
                    icon={faceIcon}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "14px",
                      fontSize: "17px",
                      color: "#999",
                    }}
                  />
                  <select className="form-control" >
                    <option>Male</option>
                    <option>female</option>
                    <option>other</option>
                  </select>
                  <Icon
                    icon={caretDown}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "14px",
                      fontSize: "17px",
                      color: "#999",
                    }}   
                  />
                </div>
              </div>
            </div>

            <div style={{ alignItems: "baseline" }}>
              <input value="Register Now" type="button" id="go" onClick={this.eventHandler}/>
            </div>
          </form>
          {this.state.errorMsg.length >0  && <ul> {this.state.errorMsg.map((item,index)=> <li key={index}>{item}</li> ) }</ul>}
        </div>
      </div>
    );
  }
}

export default Register;
