import { useEffect, useState } from "react";

const useFetch=(url)=>{
    const [Products, setProducts]=useState(null);
    const [error ,seterror]=useState(null);

    useEffect(()=>{ setTimeout(()=>{
       fetch(url)
       .then(response=>{
        if(!response.ok){
            throw Error("Couldn't Retrive Data");
        }
        console.log(response)
        return response.json();
       }).then(data=>setProducts(data))
       .catch((error)=>{
          console.log(error.message);
          seterror(error.message);
       })
       },1000)
    },[]);

    return [Products , error]
}
export default useFetch;