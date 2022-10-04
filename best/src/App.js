import './App.css';
import {Navbar} from './componentes/NavBar/NavBar';
import {Greeting} from '../src/componentes/ItemListContainer/ItemListContainer';
import { ItemList } from './componentes/ItemList/ItemList';
import { Contador} from './componentes/ItemCount/ItemCount';
//import {CardWidget, IconoCard} from '../src/componentes/CardWidget/CardWidget';
//import {ItemList} from './src/componentes/ItemList/ItemList';
//import Redes from '../src/assets/Redes.jpg';
import {useState, useEffect} from 'react';
import { CardWidget } from './componentes/CardWidget/CardWidget';
import { ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer';

export function App() {
 
  const [estadoCarrito, setEstadoCarrito] = useState("carrito vacio")
  const [numeroServicio, setNumeroServicio ] = useState(0);
 
   
 useEffect(()=>{
  setTimeout(()=>{
    setEstadoCarrito("esperado servicios")
  }, 2000);
 }, [numeroServicio])
 
 
 const agregar =(servicio)=>{
  console.log('funcion agregar' , servicio)
  setNumeroServicio (servicio)
  setEstadoCarrito ( `el carro contiene ${servicio}`);
 
}
console.log("numeroServicio" , numeroServicio);
 
 
 
 
 
 
 
  return (
    <div className="App">
      <header className="App-header">
      
      <Navbar/>
      <ItemList/>
      <Greeting/>
      <p>{estadoCarrito}</p>
      <Contador stock={10} initial={0} agregarServicio={agregar}/>
      <CardWidget/>
      <ItemDetailContainer/>
      
    
      </header>
    </div>
  );
}

export default App;
