import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
        <Navbar className="nav" title = 'TIENDA' />
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS A SU TIENDA VIRTUAL' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
