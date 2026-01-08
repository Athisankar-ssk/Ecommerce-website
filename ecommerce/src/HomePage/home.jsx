function Commerce(props){
    return(
        <div className="full">
        <div className="product">
            <img src={props.img} alt="" />
           <h4>{props.ProductName}</h4>
           <h4>{props.ProductMaterial}</h4>
           <button onClick={()=>props.Remove(props.ProductId)}>Removed</button>
        </div>
        </div>
    );
}
export default Commerce;