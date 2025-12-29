import useFetch from "../useFetch";
import Commerce from "./home";


function ProductList(){
    
    const [Products , error]=useFetch('http://localhost:3000/Products')

    function handleRemove(ProductId){
        const ProductDelete=Products.filter(prod => prod.ProductId !== ProductId);
        setProducts(ProductDelete);
    }

    

    if(!Products){
     return(
     <>
     {!error && <h1>Loading...</h1>}
     <h1>{error}</h1>
     </>) 
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