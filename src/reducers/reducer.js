function myReducer(state,action)
{
  var newState={...state};// copy
  switch(action.type)
  {
    case "ADDPRODUCT":
      newState.productArr.push(action.payload);
      break;
    case "UPDATEPRODUCT":
      var pos= newState.productArr.findIndex(item => item.productId === action.payload.productId)
      if(pos >=0)
      {
        newState.productArr.splice(pos,1,action.payload);
      }
      break;
    case "DELETEPRODUCT":
      var pos= newState.productArr.findIndex(item => item.productId === action.payload.productId)
      if(pos >=0)
      {
        newState.productArr.splice(pos,1);
      }
      break; 
    case "ADDCARTITEM":
      var pos=newState.productArr.findIndex(item => item.productId === action.payload.productId)
      if(pos >=0)
      {
        var cartPos=newState.cartArr.findIndex(item => item.productId === action.payload.productId)
        if(cartPos >=0)
        {
          newState.cartArr[cartPos].quantity+=action.payload.quantity
        }
        else
        {
          newState.cartArr.push(action.payload)
        }
        newState.productArr[pos].quantity-=action.payload.quantity
      }
       break;
  }
  return newState;
}
export default myReducer;