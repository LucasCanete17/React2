import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const saludo = 'Bienvenidos a BECKA'
  return (
    <div className="App">

      <NavBar/>

      
      
      

      <ItemListContainer saludo= {saludo}/>
      

      <div>footer</div>
    </div>
  );
}

export default App;

