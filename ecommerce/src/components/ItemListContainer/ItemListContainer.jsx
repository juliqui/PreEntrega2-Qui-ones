import { useState, useEffect, memo } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from '../../asyncMock'
import { useParams } from "react-router-dom"

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
                ? query(collection(db, 'products'), where('category', '==', categoryId))
                : collection(db, 'products')

        getDocs(collectionRef)
            .then(querySnapshot => {
                console.log(querySnapshot)

                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification('error', 'Hubo un error')
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemListMemo products={products}/>
        </div>
    )
}

export default ItemListContainer