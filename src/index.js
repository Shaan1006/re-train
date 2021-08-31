import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import myStore from './store/store'
import {Provider} from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={myStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* import {createStore} from "redux" 

var action1 ={type:"ADDPRODUCT",payload:{productId:101,productName:"apple",quantity:4}}
var action2 ={type:"ADDPRODUCT",payload:{productId:102,productName:"mango",quantity:12}}
var updateAction={type:"UPDATEPRODUCT", payload:{productId:102,productName:"lichi",quantity:15}}
var deleteAction={type:"DELETEPRODUCT", payload:{productId:102}}

function myReducer(state,action){
  var newState = {...state};
 switch(action.type){

   case "ADDPRODUCT":
     newState.productsArr.push(action.payload);
      break;
   case "UPDATEPRODUCT":
     var pos = newState.productsArr.findIndex(item=>item.productId === action.payload.productId)
     if(pos >0){
       newState.productsArr.splice(pos,1,action.payload)
     }
   break;
   case "DELETEPRODUCT":
    var pos = newState.productsArr.findIndex(item=>item.productId === action.payload.productId)
    if(pos >0){
      newState.productsArr.splice(pos,1)
    }
   break;
   case "ADDCARTITEM":
    var pos=newState.productsArr.findIndex(item => item.productId === action.payload.productId)
    if(pos >=0)
    {
      var cartPos=newState.cartArr.findIndex(item => item.productId === action.payload.productId)
      if(cartPos >=0)
      {
        newState.cartArr[cartPos].quantityPurchased+=action.payload.quantityPurchased
      }
      else
      {
        newState.cartArr.push(action.payload)
      }
    }
     break;
 }
  return newState
}

var initialState={productsArr:[],cartArr:[]}
var myStore =createStore(myReducer,initialState)

myStore.subscribe(()=>{
  console.log("State value",myStore.getState());
})

myStore.dispatch(action1);// call the reducer implicitly; call the subscribe;execute the callback function

myStore.dispatch(action2)

myStore.dispatch(updateAction)

myStore.dispatch(deleteAction)

myStore.dispatch({type:"ADDPRODUCT",payload:{productId:103,productName:"lichi"}})

function addPayload(p1){
  return {type:"ADDPRODUCT",payload:p1}
}
myStore.dispatch(addPayload({productId:104,productName:"banana",quantity:56}))
myStore.dispatch(addPayload({productId:105,productName:"grape",quantity:78}))
myStore.dispatch(addPayload({productId:106,productName:"cranberry",quantity:34}))


function addCartActionCreator(p1)
{
  return {type:"ADDCARTITEM",payload:p1}
}

myStore.dispatch(addCartActionCreator({productId:102,productName:"pineapple",quantityPurchased:5}))

myStore.dispatch({type:"UPDATECART",payload:{productId:102,productName:"apple"}})

myStore.dispatch({type:"ADDCARTITEM",payload:{productId:666,productName:"jjj"}})
myStore.dispatch(addCartActionCreator({productId:102,productName:"pineapple",quantityPurchased:3})) */

// {productId:666,productName:"jjj"} is going to be added to state.cartArr


// how to modify the redux state ---> dispatch an action (call reducer implicitty)
//call the reducer explicitly -- no
// using the reducer, can control how the state is going to modified



/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */

// 
/* 
import {createStore} from "redux"

var addAction1={type:"ADDPRODUCT" , payload:{ productId:101,productName:"apple",quantity:6}}
var addAction2={type:"ADDPRODUCT",payload:{ productId:102,productName:"mango",quantity:5}}
var updateAction1={type:"UPDATEPRODUCT",payload:{productId:102,productName:"pineapple",quantity:6}}
var deleteAction1={type:"DELETEPRODUCT",payload:{productId:101}}

function myReducer(state,action)
{
  var newState={...state};// copy
  switch(action.type)
  {
    case "ADDPRODUCT":
      newState.productsArr.push(action.payload);
      break;
    case "UPDATEPRODUCT":
      var pos= newState.productsArr.findIndex(item => item.productId === action.payload.productId)
      if(pos >=0)
      {
        newState.productsArr.splice(pos,1,action.payload);
      }
      break;
    case "DELETEPRODUCT":
      var pos= newState.productsArr.findIndex(item => item.productId === action.payload.productId)
      if(pos >=0)
      {
        newState.productsArr.splice(pos,1);
      }
      break; 
    case "ADDCARTITEM":
      var pos=newState.productsArr.findIndex(item => item.productId === action.payload.productId)
      if(pos >=0)
      {
        var cartPos=newState.cartArr.findIndex(item => item.productId === action.payload.productId)
        if(cartPos >=0)
        {
          newState.cartArr[cartPos].quantityPurchased+=action.payload.quantityPurchased
        }
        else
        {
          newState.cartArr.push(action.payload)
        }
      }
       break;
  }
  return newState;
}
var initialState={productsArr:[],cartArr:[]}
var myStore =createStore(myReducer,initialState)

myStore.subscribe(()=>{
  console.log("State value",myStore.getState());
})

myStore.dispatch(addAction1);// call the reducer implicitly; call the subscribe;execute the callback function

myStore.dispatch(addAction2)

myStore.dispatch(updateAction1)

myStore.dispatch(deleteAction1)

myStore.dispatch({type:"ADDPRODUCT",payload:{productId:103,productName:"strawberries",quantity:6}})

function addProductActionCreator(p1)
{
  return {type:"ADDPRODUCT",payload:p1}
}
myStore.dispatch(addProductActionCreator({productId:104,productName:"bananas",quantity:6}))
myStore.dispatch(addProductActionCreator({productId:105,productName:"kiwis",quantity:6}))
myStore.dispatch(addProductActionCreator({productId:106,productName:"grapes",quantity:6}))

function addCartActionCreator(p1)
{
  return {type:"ADDCARTITEM",payload:p1}
}

myStore.dispatch(addCartActionCreator({productId:102,productName:"pineapple",quantityPurchased:5}))

myStore.dispatch({type:"UPDATECART",payload:{productId:102,productName:"apple"}})

myStore.dispatch({type:"ADDCARTITEM",payload:{productId:666,productName:"jjj"}})
myStore.dispatch(addCartActionCreator({productId:102,productName:"pineapple",quantityPurchased:3})) */

// {productId:666,productName:"jjj"} is going to be added to state.cartArr


// how to modify the redux state ---> dispatch an action (call reducer implicitly)
//call the reducer explicitly -- no
// using the reducer, can control how the state is going to modified
