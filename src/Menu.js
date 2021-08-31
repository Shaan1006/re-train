import React from 'react'
import {Link} from 'react-router-dom'
class Menu extends React.Component{
 render(){

    return(
        <div>
            <h1>Menu Comp</h1>
           {/*  <div className="row">
            <ul className="row">
                <li>
                    <Link to='/products'> Products</Link>
                </li>
                <li>
                    <Link to='/employee'> Employee</Link>
                </li>
                <li>
                    <Link to='/login'> Login</Link>
                </li>
                <li>
                    <Link to='/productsearch'> Product Search</Link>
                </li>
                <li>
                    <Link to='/cart'> Cart</Link>
                </li>
            </ul>
            </div> */}


<nav className=" navbar-expand-lg navbar-light bg-light">
     <div className="container ">
      <div className ="row justify-content-md-center">
        < div className="col">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link  to='/products'> Products</Link>
        </div>
        <div className="col">
          {/* <a className="nav-link" href="#">Features</a> */}
          <Link to='/employee'> Employee</Link>
        </div>
        <div className="col">
          {/* <a class="nav-link" href="#">Pricing</a> */}
          <Link to='/login'> Login</Link>
        </div>
        <div className="col">
          {/* <a class="nav-link" href="#">Pricing</a> */}
          <Link to='/register'> Register</Link>
        </div>
        <div className="col">
          {/* <a class="nav-link" href="#">Pricing</a> */}
          <Link to='/cart'> Cart</Link>
        </div>
        <div className="col">
          {/* <a class="nav-link" href="#">Pricing</a> */}
          <Link to='/about-us'> About Us</Link>
        </div>
        <div className="col">
          {/* <a class="nav-link" href="#">Pricing</a> */}
          <Link to='/feedback'> Feedback</Link>
        </div>
        </div>
      </div>

      </nav>











        </div>
    )
 }


}

export default Menu