import React from 'react'


class AboutUs extends React.Component{
 
   constructor(){
       super()
       this.firstNameRef = React.createRef();
       this.lastNameRef = React.createRef();

   }

    goToFeedback=()=>{
        var tempObj={firstName:this.firstNameRef.current.value,LastName: this.lastNameRef.current.value}
        console.log(tempObj )
       this.props.history.push("/feedback",tempObj)

    }
 

render(){
    return(
        <React.Fragment>
        <h1>About Us</h1>
        <input type="text" placeholder="First Name" className="m-2" ref= {this.firstNameRef}/>
        <input type="text" placeholder ="Last Name" className="m-2" ref ={this.lastNameRef}/>

        <input type="button" value="Go To Feedback" id="go" onClick={this.goToFeedback}/>
        </React.Fragment>
    )
}

}
export default AboutUs