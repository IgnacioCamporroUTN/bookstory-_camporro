import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar.js';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Cart } from './components/Cart';
import CartProvider from './context/CartProvider';
import { Form } from './components/Form';

function App() {
  return (
     <>
     <CartProvider>
         <BrowserRouter>
            <NavBar/>
               <Switch>
                  <Route exact path="/"><ItemListContainer/></Route>
                  <Route exact path="/categoria/:category"><ItemListContainer/></Route>
                  <Route exact path="/item/:id"><ItemDetailContainer/></Route>
                  <Route exact path="/cart"><Cart/></Route>
                  <Route exact path="/ticket"><Form/></Route>
               </Switch>
         </BrowserRouter>
      
     </CartProvider>
     </>
   



   
    
  );
}

export default App;
