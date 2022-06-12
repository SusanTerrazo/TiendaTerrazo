import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar title = 'TIENDA' />
      <ItemListContainer greeting = 'BIENVENIDOS A SU TIENDA VIRTUAL' />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
