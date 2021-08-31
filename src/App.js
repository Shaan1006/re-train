import './App.css';
import Background from './registration.jpg'
import "./App.css"
import Login from './Login'
import Employee from "./Employee"
import { render } from '@testing-library/react';
import React from 'react';
import Register from './Register';
import ProductSearch from './ProductSearch';
import Cart from './Cart'
import Header from './Header';
import Footer from './Footer'
import Menu from './Menu'
import Home from './Home'
import {BrowserRouter} from 'react-router-dom'
// functional component App -- return the virtual DOM
class App extends React.Component{
  
 render(){
   var sectionStyle = {
    width: "auto",
    height: "auto",
    backgroundImage: `url(${Background}) `

  };
  return (
    <div className="App"  style={sectionStyle}>
     <Header></Header>
     <BrowserRouter>
      <Menu></Menu>
      <Home>
      </Home>
     </BrowserRouter>
     <Footer></Footer>
    </div>
  );
}
}
export default App;
{/* <input type="button" value= "Employee"onClick= {this.renderComponent.bind(this,"showEmp")} />
<input type="button" value= "Register"onClick= {this.renderComponent.bind(this,"showRegister")} />
<input type="button" value="Show Login" onClick={this.renderComponent.bind(this,"login")} />
<input type="button" value="Show Search Employee" onClick={this.renderComponent.bind(this,"employeesearch")} />
<input type="button" value="Show Cart " onClick={this.renderComponent.bind(this,"cart")} />
{this.state.showEmployee && <Employee></Employee> }
{this.state.showRegister &&<Register></Register> }
{this.state.showLogin && <Login></Login>}
{this.state.showSearchEmployee && <ProductSearch sendSearchToApp={this.getSearchToApp}></ProductSearch>}
{this.state.showCart  && <Cart cartData ={this.state.cartData}></Cart>} */}