import React,{useEffect,useState} from 'react';
//import {Item} from '../src/componentes/Item/Item';
import { Item } from '../Item/Item';
//import Redes from '../src/assets/Redes.jpg';
import {useParams} from 'react-router-dom';
     const arregloServidores  = [

    {
        id:1,
        nombre : "Redes Sociales",
        descripcion: "Trabajamos en su negocio de forma externa",
        
    },
   ]
   
   export const ItemList = () => {
    const {listadoId} = useParams();
    const [servidores, setServidores] = useState([]);
         

    const obtenerServidores = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(arregloServidores)
            }, 3000);
            
        })
    }
   /* useEffect(()=>{
        const funcionAsincrona = async()=>{
            try {
                const listado = await obtenerServidores();
                setServidores(listado);
                console.log('listado',listado);
            } catch (error) {
                console.log("hubo un error")
            }
        }
        funcionAsincrona();
    },[])*/
    useEffect(()=>{
        const funcionAsincrona = async()=>{
            const listado = await obtenerServidores(listado);
            setServidores(listado);
        }
        funcionAsincrona();
    },[listadoId])


    return (
        <div className='listContainer'>
            
            <div className='cardsContainer'>{
                servidores.length>0 &&
                <>
                <Item servidor={servidores[0]}/>
                <Item servidor={servidores[1]}/>
                </>
            }
              
                
            
                {
                   servidores.map((servidor)=>{
                        return(
                            <Item servidor={servidor}/>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}
   
   

/*setTimeout(() => {
                
}, 3000);*/