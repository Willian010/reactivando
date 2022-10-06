//import {CardWidget} from '../src/componentes/CardWidget/CardWidget';

import { Link, NavLink } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";
import bur from '../assets/bur.png';

export function Navbar (){
    
        return (
          <nav>
          <Link to ='/'>
          <div>
            <img className="logo" src={bur} alt="Logo"/>
            </div>
          </Link>
          <div className="nav">
            <div expand="lg" variant="light" bg="light">
              <div className="nav">
               <NavLink className={({isActive})=>isActive ?  'claseActive': 'claseInactive'}
                to="/productos">Inicio Servicios</NavLink> 
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
