import React,{useEffect,useState} from 'react';
//import {Item} from '../src/componentes/Item/Item';
import { Item } from '../Item/Item';
//import { Contador } from '../ItemCount/ItemCount';
//import Redes from '../src/assets/Redes.jpg';
//import {useParams} from 'react-router-dom';
    


   
   export const ItemList = ({servidores})=>  {
    
   /*const {listadoId} = useParams();
   
    const [servidores, setServidores] = useState([]);

    const obtenerServidores = ()=>{
        return new Promise ((resolve , reject) =>{
            setTimeout(()=>{
                resolve(arregloServidores)
            }, 2000);
        }) 
        
        //return new Promise((resolve, reject)=>{
           // const listado  = arregloServidores.find(servidores=>servidores.id === parseInt(id));
            //resolve(listado)
        //})
   } 
   
   /* useEffect(()=>{
        const funcionAsincrona = async()=>{
           try {
            const listado = await obtenerServidores();
            setServidores(listado);
            console.log('listado' , listado);
            
           } catch (error) {
           console.log("Error")
           }
        }
       
        funcionAsincrona();
     } ,[])
*/

    return (  
        <div className='listContainer'>
         
            <div className='cardsContainer'>{
           
                   servidores.map(servidor=>(
                       
                            <Item key={servidor.name} servidor ={servidor}/>
                            
                        
                   ))
                }
            </div>
        </div>
    )
}
   
   

/*setTimeout(() => {
                
}, 3000);*/
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
