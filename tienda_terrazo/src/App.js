
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import ItemCartContainer from './components/container/ItemCartContainer/ItemCartContainer';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { createContext } from 'react';
import { CartProvider } from './contex/CartContext';
import { NotificationProvider } from './notification/Notification';

export const Context = createContext()

function App() {
  
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar title = 'TIENDA' />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS A SU TIENDA VIRTUAL' />} />
                <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<ItemCartContainer/>} ></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
        
      
    </div>
  );
}

export default App;
