function addProductActionCreator(p1)
{
  return {type:"ADDPRODUCT",payload:p1}
}

function addCartActionCreator(p1)
{
  return {type:"ADDCARTITEM",payload:p1}
}

module.exports ={addProductActionCreator,addCartActionCreator}
