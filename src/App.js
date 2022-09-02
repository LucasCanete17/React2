import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const saludo = 'Bienvenidos a BECKA';
  const onAdd = () => {
    console.log('compraste');}


  
  return (
    <div className="App">

      <NavBar/>
      <ItemListContainer/>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
      

      <div>footer</div>
    </div>
  );
}

export default App;

