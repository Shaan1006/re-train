import React, { Component } from 'react'
import AddToCart from './AddToCart'
import {connect} from 'react-redux'

function stateToProps(state){
    return state
}

class ProductFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {selectedItem:{},showAddToCart:false,cartObj:{},
            productArr:this.props.productArr
        }
    }

    addToCart=(item)=>{
        this.setState({selectedItem:item,showAddToCart:true })
    }

    confirmBuy=(data)=>{
       console.log(data)
       //let index =this.state.productArr.findIndex(item => (item.productId ==data.productId))
       //let temparr =[...this.state.productArr]
       //temparr[index].quantity=temparr[index].quantity - data.quantity
       this.setState({ showAddToCart:false}) 
       //this.props.sendFilterToSearch(data)      

    }


    render() {

        console.log(this.props.propName);
        var {propName,checkdField,priceText}=this.props;
        if(checkdField === "price"){
            var tempArr = this.state.productArr.filter(item=> (item.price > priceText.start && item.price <= priceText.end))
        }
        else
        if(propName !=="")
        {  
            if(checkdField === "description"){
            var tempArr=this.state.productArr.filter(item =>{
                if(item.description.includes(propName))
                {
                    return true
                }
            })
        }
           
            else{
                var tempArr=this.state.productArr.filter(item =>{
                    if(item.productName.includes(propName))
                    {
                        return true
                    }
                })


            }
            

        }
        else
        {
            var tempArr=this.state.productArr;
        }
        var divArray = tempArr.map((item) => {
            return (
                <div className="col-4" key={item.productId}>
                    <div className="card bg-warning text-primary m-5" style={{width:"18rem"}}>
                        <div>
                            <img className="card-img-top img-responsive" src={item.imageUrl} alt={item.productName} style={{width:"100%",height:"200px"}} />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center">{item.productName}</h2>
                            <p className="card-text">{item.description} </p>
                            <p className="card-text"> Price : Rs.{item.price}</p>
                            <p className="card-text"> Quantity : {item.quantity} nos</p>
                            <input type="button" value="Add To Cart" className="btn-primary" onClick={this.addToCart.bind(this,item)} />
                        </div>
                    </div>

                </div>
            )
        })
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {divArray}
                    </div>
                    {divArray.length ==0 && <h1> No items match ur search text</h1>} 
                </div>
                <div>
                   {this.state.showAddToCart && <AddToCart confirmBuyEvent={this.confirmBuy} selectedItem ={this.state.selectedItem}></AddToCart> }
                </div>

            </React.Fragment>

        )
    }
}

export default connect(stateToProps)(ProductFilter)