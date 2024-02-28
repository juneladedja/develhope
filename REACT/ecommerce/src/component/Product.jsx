import { useState } from "react";
import { useEffect } from "react";

export function Product(){
    const [prod, setProd] = useState([])
    async function FetchProduct(){
        try {
            const res = await fetch ('https://fakestoreapi.com/products');
            const data = await res.json()
            console.log(data);
            setProd(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        FetchProduct()
    }, [])

    useEffect (() => {
        console.log(data);
    }, [data])

    return (
        <>
        <h3> I miei prodotti: </h3>
        <ul>
        {data.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
         ))}
        </ul>
        </>
    );
}