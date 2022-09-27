import './App.css';
import {Navbar} from './componentes/NavBar/NavBar';
import {Greeting} from '../src/componentes/ItemListContainer/ItemListContainer';
//import {CardWidget, IconoCard} from '../src/componentes/CardWidget/CardWidget';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Navbar/>
     
      <Greeting/>
    
      </header>
    </div>
  );
}

export default App;
