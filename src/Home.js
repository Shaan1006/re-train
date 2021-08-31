import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Employee from './Employee'
import EmployeeDetails from './EmployeeDetails'
import Feedback from './Feedback'
import Login from './Login'
import ProductSearch from './ProductSearch'
import Register from './Register'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={cartData:[]}
    }
    getSearchToApp=(cartData)=>{
        var pos = this.state.cartData.findIndex(item=>item.productId === cartData.productId)      
        if(pos>=0)
        {
                 var tempArr= this.state.cartData
                 tempArr[pos].quantity += cartData.quantity
                 this.setState({cartData:tempArr})
        }
       else {
        var tempArr =[...this.state.cartData,cartData] 
        this.setState({cartData:tempArr}) 
      }
      }
     render(){
         return(
             <React.Fragment>
                 <Switch>           
                     
                 <Route path="/about-us" component={AboutUs}></Route>
                 <Route path="/feedback" component={Feedback}></Route>    
                       <Route path="/products">
             <ProductSearch sendSearchToApp={this.getSearchToApp}></ProductSearch>
             </Route>
             <Route path="/forgot" render={(props)=>{<h1>Forgot Password</h1>}}></Route>
             <Route path="/employee" component={Employee}></Route>

             <Route path="/employeedetails/:empId" component={EmployeeDetails}></Route>

             <Route path="/login" component={Login}></Route>
             <Route path="/register" component={Register}></Route>
             <Route path="/cart">
             <Cart cartData ={this.state.cartData}></Cart>
             </Route>
             <Route path="/" component={Employee} exact></Route>
             <Route  render={(props)=>{return(
                 <h1>Page Not Found</h1>
             )}} ></Route>
             </Switch>
             </React.Fragment>
         )
     }
}
export default Home