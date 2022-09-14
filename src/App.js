import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';

function App() {

  const saludo = 'Bienvenidos a BECKA';
  const onAdd = () => {
    console.log('compraste');}


  
  return (
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
      <div>footer</div>
    </div>
  );
}

export default App;