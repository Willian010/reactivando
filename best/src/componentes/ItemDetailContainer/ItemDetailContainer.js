
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { arregloProductos } from '../BaseDD/BaseDD';
import { ItemDetail } from '../ItemDetail/ItemDetail';
//import {arregloProductos} from './componentes/BaseDD/BaseDD';
//import {item} from '../ItemList/ItemList';
//import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer';

export const ItemDetailContainer =() =>{
    
    const {productId} = useParams();
    console.log("productId", productId);
    
    const [item, setItem] = useState({})
        
        const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(product);
        })
        }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

        console.log("item",item)
    return(
        <div className="item-detail-container">
            <p >Detalle</p>
            <ItemDetail item={item}/>
        </div>
    )
}
