import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar.js';
import { BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
     <>
     <BrowserRouter>
       <NavBar/>
       <Switch>
         <Route exact path="/">
            <ItemListContainer/> 
         </Route>
         <Route exact path="/categoria/:category">
            <ItemListContainer/> 
         </Route>
         <Route exact path="/item/:id">
            <ItemDetailContainer/> 
         </Route>
         </Switch>
     </BrowserRouter>
     </>
   



   
    
  );
}

export default App;
