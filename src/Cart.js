import React from "react";
import PropTypes from "prop-types"
import {connect } from 'react-redux'

function mapStateToProps(state){
  return {cartData:state.cartArr}
}

class Cart extends React.Component {
  render() {
    console.log(this.props.cartData);

    var tarr = this.props.cartData.map((item) => {
      return (
        <tr key={item.productId}>
          <td>{item.productName}</td>
          <td> {item.description}</td>
          <td> {item.price} </td>
          <td> {item.quantity} </td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Cart Component</h1>
        <div className="row sm-3">
          {/*  {divArray} */}
          <table className="table bg-white ">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Price </th>
                <th>Quantity Purchased</th>
              </tr>
            </thead>
            <tbody>{tarr}</tbody>
          </table>
          { this.props.cartData.length===0 && <h1>Cart is Empty</h1>}
        </div>
      </div>
    );
  }
}
Cart.propTypes = {
  cartData: PropTypes.array
}

Cart.defaultProps = {
  cartData:[]
}
export default connect(mapStateToProps)(Cart)
