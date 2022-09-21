import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import {CartProvider} from './context/CartContext'


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
          </Routes>
      </BrowserRouter>
      <div className="footer">footer</div>
      </div>
    </CartProvider>
  );
}

export default App;