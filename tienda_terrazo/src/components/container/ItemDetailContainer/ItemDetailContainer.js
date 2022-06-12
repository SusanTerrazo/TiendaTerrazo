import { useState, useEffect } from "react"
import { getProductById } from "../../../asyncmock"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    useEffect(()=> {
        getProductById ('1').then(response => {
            setProduct(response)
        } )
    }, [])

    console.log(product)

    return (
        <>
            <h1> Detalle del producto </h1>
            <ItemDetail {...product}/>

        </>
    )
}

export default ItemDetailContainer