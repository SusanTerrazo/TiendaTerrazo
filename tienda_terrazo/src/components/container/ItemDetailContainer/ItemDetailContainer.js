import { useState, useEffect } from "react"
import { getProductById } from "../../../asyncmock"
import ItemDetail from "../../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const params = useParams()
    

    useEffect(()=> {
        getProductById (params.productId).then(response => {
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