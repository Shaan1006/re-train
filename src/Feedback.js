import React from 'react'

class Feedback extends React.Component{

    
render(){
    var obj = this.props.location.state || {firstName:"Guest",LastName:""};
    
    return(
        <React.Fragment>
        <h1>Feedback</h1>
        <p> Welcome  { obj.firstName} {obj.LastName}</p>   
        </React.Fragment>
    )
}

}
export default Feedback