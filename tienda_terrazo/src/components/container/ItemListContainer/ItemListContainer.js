import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from '../../../asyncmock'
import ItemList from '../../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../../services/firebase'



const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    
    
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? (
            query(collection(db, 'products'), where('category','==', categoryId))
        ) : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // if(!categoryId){
        //     getProducts().then(response => {
        //         setProducts(response)
        //     }).catch(error =>{
        //         console.log(error)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        // } else {
        //     getProductByCategory (categoryId).then(response => {
        //         setProducts(response)
        //     }).catch(error =>{
        //         console.log(error)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        // }
        
    }, [categoryId])

    if(loading){        //Rendering condicional
        return <h1>Cargando...</h1>

        
    }

    return (
        <div>
            <h2>{props.greeting}</h2>
            {products.length > 0
            ?<ItemList  products={products}/>       //validacion con ternario--verdadero
            : <h1>No existen productos para mostrar</h1> //falso
            }
            
        </div>
    

    )
    

} 

export default ItemListContainer