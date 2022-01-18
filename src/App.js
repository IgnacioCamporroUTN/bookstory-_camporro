import './App.css';

import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar.js';

function App() {
  return (
    <div className="App" >
     <>
     
     <NavBar/>
     <ItemListContainer greeting='Bienvenido a Bookstore'/>
    
    
     </>
    </div>
  );
}

export default App;
