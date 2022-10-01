import './App.css';
import {Navbar} from './componentes/NavBar/NavBar';
import {Greeting} from '../src/componentes/ItemListContainer/ItemListContainer';
import { ItemList } from './componentes/ItemList/ItemList';
//import {CardWidget, IconoCard} from '../src/componentes/CardWidget/CardWidget';
//import {ItemList} from './src/componentes/ItemList/ItemList';
//import Redes from '../src/assets/Redes.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Navbar/>
      <ItemList/>
      <Greeting/>

      
    
      </header>
    </div>
  );
}

export default App;
