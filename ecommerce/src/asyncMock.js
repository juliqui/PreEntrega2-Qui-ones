const products = [
    { 
        id: '1', 
        name: 'Megadeth 2024', 
        price: 50000, 
        category: 'Entrada', 
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FMegadeth&psig=AOvVaw35kD6qMSK1-4nX28JFsG9Q&ust=1706043350671000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCl6PLw8YMDFQAAAAAdAAAAABAI', 
        stock: 25, 
        description:'Entrada megadeth abril 2024'
    },
    { id: '2', 
    name: 'Opeth 2025', 
    price: 35000, 
    category: 'Entrada', 
    img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.webmetalextremo.com%2Fopeth-guia-de-escucha%2F&psig=AOvVaw1-VE_YVYut71cBodlRUEIj&ust=1706043448828000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIi866Dx8YMDFQAAAAAdAAAAABAD',
    stock: 5, 
    description:'Entrada Opeth 2025'
},
    { id: '3',
     name: 'A day to remember 2025',
     price: 60000,
     category: 'Entrada',
     img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rockaxis.com%2Frock%2Fnoticia%2F29116%2Fa-day-to-remember-da-a-conocer-un-track-inedito%2F&psig=AOvVaw0GplnQsOODsxByADKnGqd_&ust=1706043483642000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjg9vbx8YMDFQAAAAAdAAAAABAD',
     stock: 8, description:'Entrada A day to remember 2025'}
]




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}