import React, { useEffect, useState }  from "react";
import {collection, getDocs} from 'firebase/firestore';
import { db } from "../../utils/firebase";


export const PaginaFirebase = () => {
    const [arregloItems, setArregloItems] = useState([]);

    useEffect(()=>{
        const getData= async() =>{
            //consulta
            const query = collection(db, "items");
            const response =  await getDocs(query);
            const docs = response.docs;
            //console.log("docs info", docs[0].data());
            //console.log("docs info", docs[0].id);
            const data = docs.map(doc=>{return {...doc.data(),id:doc.id}})
            setArregloItems(data);


        }
        getData()
    },[])







    
    return(
<div>PaginaFirebase</div>

    )
}