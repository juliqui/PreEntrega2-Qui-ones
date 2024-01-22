import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <NotificationProvider>
          <BrowserRouter>
            <CartProvider>
                <Navbar />
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>}/>
                  <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                </Routes>
            </CartProvider>
          </BrowserRouter>
      </NotificationProvider>
    </>
  )
}

export default App