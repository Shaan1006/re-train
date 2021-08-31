import {createStore} from "redux"
import myReducer from "../reducers/reducer"

var initialState = {cartArr:[], productArr: [
    { productId: 101, productName: "Iphone XR", description: " IPhone XR mobile from Apple", price: 2343, imageUrl: "./Images/iphone.jpg",quantity:10 },
    { productId: 102, productName: "One plus Nord", description: "One plus Nord mobile ", price: 4343, imageUrl: "./Images/oneplus.jpg",quantity:5 },
    { productId: 103, productName: "Samsung Note 9", description: "Samsung Note 9 mobile", price: 123, imageUrl: "./Images/macbook air.jpg",quantity:14 },
    { productId: 104, productName: "Vivo v 19", description: " Vivo v 19 mobile", price: 6754, imageUrl: "./Images/vivo.png",quantity:12 },
    { productId: 105, productName: "HTC Note", description: " Htc mobile with 16gb RAM", price: 123, imageUrl: "./Images/htc.png" ,quantity:100},

]}

var myStore = createStore(myReducer,initialState)

export default myStore