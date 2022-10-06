/*import { Contador } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
//import {agregar} from '../src/App';

export function Greeting () {
    
    return(
        <>
        <div className="ItemListContainer">
        <p >HI</p>
        
        <ItemList/>
        <Contador stock={10} initial={0} agregarServicio={agregar}/>

           </div>
        </>
    )
}*/
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
//import './ItemListContainer.css';
// import { ItemCount } from "../ItemCount/ItemCount"
import {servidor} from './Item/Item';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {arregloServidores} from '../BaseDD/BaseDD';

export const ItemListContainer = ()=>{
    const {tipoServidor} = useParams();
    console.log('tipodeServidor',tipoServidor);

    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloServidores);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoServidor){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(servidor=>servidor.id === tipoServidor);
                // console.log('nuevaLista',nuevaLista)
                setProductos(nuevaLista)
            }
        })
    },[tipoServidor])

    console.log('servidor', servidor)
    return(
        <div className="item-list-container">
            <p>Lista</p>
            <ItemList servidores={servidor}/>
        </div>
    )
} 