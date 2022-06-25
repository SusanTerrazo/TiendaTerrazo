import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext ( )

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])
    const [totalPago, setTotalPago] = useState(0)
    
    
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(()=> {
        let totalQuantity = 0
        let total = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        setTotalQuantity(totalQuantity)
        setTotalPago(total)
    }, [cart])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)

     setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const clearCart = () => {
          setCart([])
    }
    return (
        <CartContext.Provider value ={{
            cart,
            totalQuantity,
            addItem,
            removeItem,
            isInCart,
            clearCart,
            totalPago
            }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}