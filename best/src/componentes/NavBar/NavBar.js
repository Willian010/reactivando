//import {CardWidget} from '../src/componentes/CardWidget/CardWidget';

import { Link, NavLink } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";
//import bur from './best/src/assets/bur.png';


export function Navbar (){
    
        return (
          <nav>
          <Link to ='/'>
          <div>
            <img className="logo" src={'https://previews.123rf.com/images/redlinevector/redlinevector1609/redlinevector160900725/62181448-sombrero-de-verano-para-hombre-icono-plana-ilustraci%C3%B3n-de-vectores-multicolor-del-sombrero-de-la-pro.jpg?fj=1'} alt="Logo"/>
            </div>
          </Link>
          <div className="nav">
            <div expand="lg" variant="light" bg="light">
            <div className="nav">
               <NavLink className={({isActive})=>isActive ?  'claseActive': 'claseInactive'}
                to="/productos">Inicial</NavLink> 
              </div>
              <div className="nav">
               <NavLink className={({isActive})=>isActive ?  'claseActive': 'claseInactive'}
                to="/productos/mantenimiento">Mantenimiento</NavLink> 
              </div>
              <div className="nav">
              <NavLink className={({isActive})=>isActive ?  'claseActive': 'claseInactive'}
                to="/productos/e-commers">E-commers</NavLink>
              </div>
              <div className="nav">
              <NavLink className={({isActive})=>isActive ?  'claseActive': 'claseInactive'}
                to="/productos/servidornube">Servidor</NavLink>
              </div>
              <div className="nav">
              <NavLink className={({isActive})=>isActive ?  'claseActive': 'claseInactive'}
                to="/productos/precios">Precios</NavLink>
              </div>
              <div>
                
              <CardWidget/>
                
              </div>
            </div>
           </div>
          
          
           </nav>
        );
      }
