export function Product({product}){

    return(
        <>
        <h2> Prodotto: {product.title} </h2>
        <p> Prezzo: {product.price} </p>
        </>
    )
}