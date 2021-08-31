import React from 'react'
import {connect} from 'react-redux'
import {addCartActionCreator} from './actions/actionCreators'


function mapDispatchToProps(dispatch){
    return {
        addCartEvent:(p1)=> dispatch(addCartActionCreator(p1))
    }

}


class AddToCart extends React.Component{
    constructor(props){
        super(props)
        this.state={initialquantity:1, selectedprops:this.props.selectedItem}
    }

    addQuantity=()=>{
          

     this.setState(oldState => ({ initialquantity:oldState.initialquantity+1}) )

    }
    deleteQuantity=()=>{
        this.setState((oldState)=>{ return { initialquantity:oldState.initialquantity-1}})
    }

    static getDerivedStateFromProps(newProps,prevState){
        if(newProps.selectedItem.productId !=prevState.selectedprops.productId){
            return ({...prevState,initialquantity:1,selectedprops:newProps.selectedItem})
        }
        else{
            return prevState
        }
    }
    confirmBuy=()=>{
        var tempObj= {...this.state.selectedprops,quantity:this.state.initialquantity}
        this.props.confirmBuyEvent()
        this.props.addCartEvent(tempObj)

    }

    render(){
        console.log(this.props.selectedItem)
        var item =this.props.selectedItem;
        return(
            <div className="row"> 
                <h1> AddToCart</h1>
                <div className="col-4 offset-2" key={item.productId}>
                    <div className="card bg-warning text-primary m-5" style={{width:"18rem"}}>
                        <div>
                            <img className="card-img-top img-responsive" src={item.imageUrl} alt={item.productName} style={{width:"100%",height:"200px"}} />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center">{item.productName}</h2>
                            <p className="card-text">{item.description} </p>
                            <p className="card-text"> Price : Rs.{item.price}</p>
                            <p className="card-text"> Quantity : {item.quantity} nos</p>
                            <input type="button" value="+" className="btn-success m-2"
                            onClick={this.addQuantity} disabled={this.state.initialquantity == this.props.selectedItem.quantity} />   
                            
                             {this.state.initialquantity}
                            
                            <input type="button" value="-" className="btn-danger m-2" onClick={this.deleteQuantity} 
                            disabled={this.state.initialquantity == 1} />
                            <input type="button" value="Confirm Buy" className=" btn btn-success m-2" onClick={this.confirmBuy} />
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default   connect(null,mapDispatchToProps)(AddToCart)