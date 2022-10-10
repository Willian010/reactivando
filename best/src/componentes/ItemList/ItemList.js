
import { Item } from '../Item/Item';

import { Link } from 'react-router-dom';
    


   
   export const ItemList = ({items})=>  {
    
   /*//const {listadoId} = useParams();
   
    const [producto, setProducto] = useState([]);

    const obtenerProductos = ()=>{
        return new Promise ((resolve , reject) =>{
            setTimeout(()=>{
                resolve(arregloProductos)
            }, 2000);
        }) 
        
        /*return new Promise((resolve, reject)=>{
            const listado  = arregloServidores.find(servidores=>servidores.id === parseInt(id));
            resolve(listado)
        })
   } 
   
   useEffect(()=>{
        const funcionAsincrona = async()=>{
           try {
            const listado = await obtenerProductos();
            setProducto(listado);
            console.log('listado' , listado);
            
           } catch (error) {
           console.log("Error")
           }
        }
        
        funcionAsincrona();
     } ,[])
    */

    /*return (  
        <div className='listContainer'>
         
            <div className='cardsContainer'>{
           
                   producto.map(producto=>(
                       
                            <Item key={producto.name} producto ={producto}/>
                            
                        
                   ))
                }
            </div>
        </div>
    )*/
    return(
        <div className='listContainer'>
            {
               // items.map(producto=>(
                   //<Link key={producto.id} to={`/item/${producto.id}`}>
                      //  <Item item={producto}/>
                   // </Link>
               // ))
            }
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
