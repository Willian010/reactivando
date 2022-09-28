//import {CardWidget} from '../src/componentes/CardWidget/CardWidget';

import { CardWidget } from "../CardWidget/CardWidget";

export function Navbar (){
    
        return (
          <div className="nav">
            <div expand="lg" variant="light" bg="light">
              <div className="nav">
                <a  href="#">Navbar1</a>
              </div>
              <div className="nav">
                <a  href="#">Navbar2</a>
              </div>
              <div className="nav">
                <a  href="#">Navbar3</a>
              </div>
              <div>
                
              <CardWidget/>
                
              </div>
            </div>
           </div>
          
          
           
        );
      }
