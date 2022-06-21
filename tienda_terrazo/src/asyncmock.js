const products = [
    {
        id: '1',
        name: 'Cardigan Corali',
        price: 50,
        category: 'damas',
        img: '/images/285950843_5197430700364524_3045114844302614927_n.jpg',
        stock: 10,
        description: 'Cardigan crema para dama, en excelentes acabados, colores de temporada, todo lo que necesitas para este clima',
        talla: 'L , M, S, XS'
    },

    {
        id: '2',
        name: 'Camisa leñadora',
        price: 100,
        category: 'ofertas',
        img: '/images/201182636_1085412148652109_7984180240398035694_n.jpg',
        stock: 15,
        description: 'Camisa leñadora para damas',
        talla: 'L , M, S, XS'

    },

    {
        id: '3',
        name: 'Pijama Algodon',
        price: 120,
        category: 'caballeros',
        img: '/images/157117528_2174741259327856_410240175912606896_n.jpg',
        stock: 10,
        description: 'Pijama en algodon para varon',
        talla: 'L , M, S, XS'
    },

    {
        id: '4',
        name: 'Pantalon Besdi',
        price: 150,
        category: 'temporada',
        img: '/images/282563969_540831467692139_6578088287927377971_n.jpg',
        stock: 15,
        description: 'Pantalon palazo Besdi',
        talla: 'L , M, S, XS'
    },
    
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })

}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })

}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })

}


