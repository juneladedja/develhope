import { useEffect } from "react"
import { useState } from "react"
import { Product } from "./Product"

export function FetchProducts(){

    const [prod, setProd] = useState([])
    const [error, setError] = useState(false)
    const [prodotti, setProdotti] = useState([])

    async function fetchData(){
        try {
            const res = await fetch (' https://fakestoreapi.com/products')
            const data = await res.json()
            console.log(data);
            setProd(data)
            setProdotti(data)
        } catch (error) {
            setError(true)
        }
    } 

    useEffect (()=>{
        fetchData()
    },[])

    function handleClothing(){
        setProdotti(prod.filter((product) => product.category === "men's clothing"))
    }

    function handleJewelry(){
        setProdotti(prod.filter((product) => product.category === "jewelery"))
    }

    function handleAll(){
        setProdotti(prod)
    }

    return(

        <> 
        <button onClick={handleClothing}> men's clothing </button>
        <button onClick={handleJewelry}> jewelery </button>
        <button onClick={handleAll}> all </button>

        <div>
            {prodotti.map((product)=> {
                return <Product product= {product} key={product.id}/>
            })}
        </div>
        </>
    )
}