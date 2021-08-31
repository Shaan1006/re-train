import React from 'react'
import ProductFilter from './ProductFilter';

class ProductSearch extends React.Component {

    constructor()
    {
        super()
        this.state={filterText:"",checkedField:"",showPriceCategory:false,priceText:{start:0,end:500},cartDataSearch:[]}
    }
    filterTextEventHandler=(event)=>{
        this.setState({filterText:event.target.value});
    }
    radioClicked=(p1)=>{
        this.setState({checkedField:p1})
        if (p1 === "price") {
            this.setState({ showPriceCategory: true });
        }
        else {
            this.setState({ showPriceCategory: false })
        }

    }
    selectPriceRange=(pos)=>{
       var priceRangeArr =[{start:0,end:500},{start:501,end:5000},{start:5001,end:10000}]
       this.setState({priceText:priceRangeArr[pos]})
    }
    getFilterToSearch=(cartData)=>{
        
       this.props.sendSearchToApp(cartData)
    }


    render(){
        return(
            <div>
            <h1>Search Products Details</h1>
           <div>
               <input type="radio" name="filterField" defaultChecked onClick={this.radioClicked.bind(this,"productName")} /> Product Name 
               <input type="radio" name="filterField"  onClick={this.radioClicked.bind(this,"description")} /> Product Description
               <input type="radio" name="filterField"  onClick={this.radioClicked.bind(this,"price")} /> Price
           </div>
           {this.state.showPriceCategory ?
                        <div>
                            <br /><input type="radio" name="priceFilter" defaultChecked onClick={this.selectPriceRange.bind(this,0)}/> 0 to 500
                            <br /><input type="radio" name="priceFilter" onClick={this.selectPriceRange.bind(this,1)} /> 501 to 5000
                            <br /><input type="radio" name="priceFilter" onClick={this.selectPriceRange.bind(this,2)}/> 5001 to 10000
                        </div>
                        :
                        <input type="text" placeholder="Enter text to filter" onChange={this.filterTextEventHandler} /> 
           }
            <ProductFilter sendFilterToSearch={this.getFilterToSearch} priceText={this.state.priceText} checkdField={this.state.checkedField} propName = {this.state.filterText}></ProductFilter>
            </div>
        )
        }
    }



export default ProductSearch