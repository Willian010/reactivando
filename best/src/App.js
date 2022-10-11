import './App.css';
import {Navbar} from './componentes/NavBar/NavBar';
import { ItemListContainer} from '../src/componentes/ItemListContainer/ItemListContainer';
import React, {useState, useEffect} from 'react';
import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import { CartContainer } from './componentes/ItemList/CartContainer/CartContainer';
import { CartProvider } from './componentes/contex/CartContext';
import { PaginaFirebase } from './componentes/PaginaFirebase/PaginaFirebase';

export function App() {
 
 /* const [estadoCarrito, setEstadoCarrito] = useState("carrito vacio")
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
//console.log("agregar" , agregar)
agregar();
 */








  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
      <header className="App-header">
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/productos/:tipoProducto' element={ <ItemListContainer/>}/>
        <Route path='/item/:prodId' element={ <ItemDetailContainer/>}/>
        <Route path='/Cart' element={ <CartContainer/>}/>
        <Route path='*' element={ <ItemDetailContainer/>}/>
        <Route path='/firebase' element={<PaginaFirebase/>}/>
      </Routes>
      </header>
      
    </div>
    
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
//<ItemList/><CardWidget/>