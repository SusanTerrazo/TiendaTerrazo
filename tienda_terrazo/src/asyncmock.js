const products = [
    {
        id: '1',
        name: 'Cardigan Corali',
        price: 50,
        category: 'damas',
        img: 'https://scontent.fjau2-1.fna.fbcdn.net/v/t39.30808-6/285950843_5197430700364524_3045114844302614927_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEU8hUn6RuRnFI86974RT1uHcwPd7_7JaEdzA93v_slofyUQn1ymoVt9fCFT69XYvwQdfGZ8gCeyj8u1PHJTr5F&_nc_ohc=WdIlJV1v1HMAX8qW-Ph&_nc_oc=AQlnA5IgIuvDZPOiQ8CL0zjs-AuuNwe_qRirKcdotcixqunq398V8kn1-ZzIUlxJVqQ&_nc_ht=scontent.fjau2-1.fna&oh=00_AT-dbf4RkbMqJb6Oq9RP4U3TQMRomh0RQm3n0Wt4NLSCww&oe=62A15EF3',
        stock: 30,
        description: 'Cardigan crema para dama, en excelentes acabados, colores de temporada, todo lo que necesitas para este clima',
        talla: 'L , M, S, XS'
    },

    {
        id: '2',
        name: 'Camisa leñadora',
        price: 100,
        category: 'ofertas',
        img: 'https://scontent.fjau2-1.fna.fbcdn.net/v/t39.30808-6/282054689_548789090237901_1155466115921357191_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFCELsQ06sZdO6pCOs6o3lAjigng042tL-OKCeDTja0vzv8hW8-GAs-h1UdnAwXC00CBcelnj03nXaajBslBO5P&_nc_ohc=BBoolCxaBY0AX-qZmBw&tn=lnf9V0pBD0SaiWVw&_nc_ht=scontent.fjau2-1.fna&oh=00_AT8wJUQfOKdwWtrfXXYFkdtHsicqmBuVz1M0fBAxrGRxww&oe=62A193D4',
        stock: 15,
        description: 'Camisa leñadora para damas',
        talla: 'L , M, S, XS'

    },

    {
        id: '3',
        name: 'Pijama Algodon',
        price: 120,
        category: 'caballeros',
        img: 'https://scontent.fjau2-1.fna.fbcdn.net/v/t39.30808-6/284175297_2542735422528436_2768756370820672598_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGW4BEkEIM6hAZ-LA-_yshywis9iEXcRlzCKz2IRdxGXG5cjVqnXIAb1tK6rXC6kBKumpRzfKT058l9VJQXeIPq&_nc_ohc=SO2_hQzvdcYAX_r2dVi&_nc_ht=scontent.fjau2-1.fna&oh=00_AT9Jm0yo0qClyB7dF350GhlRzYQfsmvoyeYNUVh16JGhmA&oe=62A11930',
        stock: 10,
        description: 'Pijama en algodon para varon',
        talla: 'L , M, S, XS'
    },

    {
        id: '4',
        name: 'Pantalon Besdi',
        price: 150,
        category: 'temporada',
        img: 'https://scontent.fjau2-1.fna.fbcdn.net/v/t39.30808-6/283031760_531112345330718_273939449665025576_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFgawSoXjxQOfUsJOR927WSbZKEjp6xr2ZtkoSOnrGvZonjjMHrIQSaRXm1UtInH3Fys6CKwiINjju2ALDGbIEI&_nc_ohc=iR6MlApdKMsAX8nKYNp&_nc_ht=scontent.fjau2-1.fna&oh=00_AT-Ct_Q01lJuJUpHnW-sqTkuQKoMgN5kowZH-h1MF3gpVA&oe=62A0E4C8',
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


