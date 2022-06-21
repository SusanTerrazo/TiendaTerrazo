
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { createContext, useState } from 'react';
import { CartProvider } from './contex/CartContext';

export const Context = createContext()

function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar className="nav" title = 'TIENDA' />
          <Routes>
              <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS A SU TIENDA VIRTUAL' />} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
        
      
    </div>
  );
}

export default App;
