import { useCartContext } from "../../contex/CartContext" 
import { useNotification } from "../../notification/Notification"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useState } from "react"
import { Form } from "react-bootstrap"


const Checkout = () => {

    const[loading, setLoading] = useState(false)
    const {cart, clearCart, totalPago } = useCartContext()
    
    const setNotification = useNotification()
    

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [phone, setPhone] = useState('')
      const [address, setAddress] = useState('')
      const [date, setDate] = useState ('')
    
      const buyer = {
        nombre: name,
        email: email,
        phone: phone,
        address: address,
        date: date,
      }

      
    const handleCreateOrder = () => {
      setLoading(true)
      
      const objOrder = {
        comprador: buyer,       
        items: cart,
        total: totalPago

      }
      
      const batch = writeBatch(db)
  
      const ids = cart.map(prod=> prod.id)
  
      const outOfStock = []
  
      const collectionRef = collection(db, 'products')
  
      getDocs(query(collectionRef, where(documentId(), 'in', ids )))
          .then(response => {
            console.log(response)
            response.docs.forEach(doc => {
              const dataDoc = doc.data()
              const prod = cart.find(prod => prod.id === doc.id)
              const prodQuantity = prod.quantity 
  
              if(dataDoc.stock >= prodQuantity){
                batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
              }else{
                  outOfStock.push({ id: doc.id, ...dataDoc})
              }
            })
          }).then(() =>{
            if(outOfStock.length === 0){
              const collectionRef = collection(db, 'orders')
              return addDoc(collectionRef, objOrder)
            }else {
              return Promise.reject({ type: 'out_of_stock', products: outOfStock})
            }
          }).then(({id}) => {
            batch.commit()
            clearCart()
            setNotification('success',`Su orden se generó correctamente. El codigo de su orden es: ${id}`)
          }).catch(error => {
              if (error.type === 'out_of_stock'){
                setNotification('error','Hay productos que no tienen stock')
              } else{
                console.log(error)
              }
          }).finally(()=>{
            setLoading(false)
          })
  
      

    }

      if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }


    
         
      return (
        <>
            <h3>REGISTRA TUS DATOS</h3>
            <Form>
               <Form.Group className="mb-3" controlId="text">
                   <label>Nombres y apellidos: </label>
                   <input type='text' id="nombre" name="nombre" value={name} onChange={({ target }) => setName(target.value)} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="text">
                   <label>Email: </label>
                   <input type='email' id="email" name="email"  value={email} onChange={({ target }) => setEmail(target.value)}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="text">
                   <label>Confirmar Email: </label>
                   <input type='email' id="email" name="email"  value={email} onChange={({ target }) => setEmail(target.value)}/>
               </Form.Group>
               <Form.Group className="mb-3" controlId="text">
                   <label>Celular: </label>
                   <input type='text' id="celular" name="celular"  value={phone} onChange={({ target }) => setPhone(target.value)}  />
               </Form.Group>
               
               <Form.Group className="mb-3" controlId="text">
                   <label>Dirección: </label>
                   <input type='text' id="direccion" name="address"  value={address} onChange={({ target }) => setAddress(target.value)} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="text">
                   <label>Date: </label>
                   <input type='date' id="date" name="date"  value={date} onChange={({ target }) => setDate(target.value)} />
               </Form.Group>
            </Form>
            <button className="btn-succes" onClick={handleCreateOrder} >GENERAR ORDEN</button>
        </>
        
      )

      

}

export default Checkout