import Commerce from "./home";

import { useEffect, useState } from "react";

function ProductList(){
    const [Products, setProducts]=useState(null)
    
    function handleRemove(ProductId){
        const ProductDelete=Products.filter(prod => prod.ProductId !== ProductId)
        setProducts(ProductDelete);
    }

    useEffect(()=>{
       fetch('http://localhost:3000/Products')
       .then(response=>{
        console.log(response)
        return response.json();
       }).then(data=>setProducts(data))
    },[]);

    if(!Products){
     return <></>
    }

    const Productmap=Products.map((prod)=>(
        <Commerce  key={prod.ProductId}  ProductId={prod.ProductId} ProductName={prod.ProductName} ProductMaterial={prod.ProductMaterial} img={prod.img} Remove={handleRemove}></Commerce>
    ))
  return(
      <>
      {Productmap}
      </>
  );
}
export default ProductList;