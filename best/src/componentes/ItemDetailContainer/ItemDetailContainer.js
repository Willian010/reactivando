
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { Item } from '../Item/Item';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {arregloServidores} from './componentes/ItemList/ItemList';
//import {item} from '../ItemList/ItemList';
//import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer';

export const ItemDetailContainer =() =>{
   
    const {productId} = useParams()

    const [item, setItem] = useState({})
    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = arregloServidores.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
        </div>
    )
}