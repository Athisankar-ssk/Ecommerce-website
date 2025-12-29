import Commerce from "./home";
import Tshirt from '../assets/Tshirt.jpg'
import shirt from '../assets/Shirt.jpg'
import { useState } from "react";

function ProductList(){
    const [Products, setProducts]=useState([
        {ProductId:1 ,ProductName:"T-shirt", ProductMaterial:"Cotton", img:Tshirt},
        {ProductId:2 ,ProductName:"shirt", ProductMaterial:"Cotton", img:shirt}
    ])
    
    function handleRemove(ProductId){
        const ProductDelete=Products.filter(prod => prod.ProductId !== ProductId)
        setProducts(ProductDelete);
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