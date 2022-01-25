import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar.js';

function App() {
  return (
    <div className="App" >
     <>
     
     <NavBar/>
     <ItemDetailContainer/>
     <ItemListContainer greeting='Bienvenido a Bookstore'/>
    
    
     </>
    </div>
  );
}

export default App;
