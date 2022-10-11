
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { CartProvider } from './context/CartContext';



function App() {



  
  return (
    <CartProvider>
      <div className="App">

      <BrowserRouter>

      <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/categoria/:categoriaId' element={ <ItemListContainer/> } />
            <Route path='/detalle/:id' element={ <ItemDetailContainer/> }/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
      </BrowserRouter>
      
      </div>
    </CartProvider>
  );
}

export default App;