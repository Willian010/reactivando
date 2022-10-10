import { children, createContext, useState } from "react";

import React from 'react'

export const CartContext= createContext();


    export const CartProvider = ({children})=>{
        const [prodCartList, setProdCartList] = useState([]);

        const isInCart = (id)=>{
            const elementExists = prodCartList.some(element =>element.id ===id);
                return elementExists;
            
        }
            /*if(elmIndex>=0){
                return{exists: true, index:elmIndex}

            }else{
                return{exists: false, index:undefined}
            }
        }*/

        const  addProd = (prod, qty)=>{
            const  newList = [...prodCartList,prod]
            
            if(isInCart(prod.id)){
                const prodIndex = prodCartList.findIndex(element=>element.id === prod.id)
                newList[prodIndex].quantity= newList[prodIndex].quantity + qty; 
                setProdCartList(newList)
            }else{
                const newProd={...prod,quantity:qty}
                const newList = [...prodCartList];
                newList.push(newProd);
                setProdCartList(newList);
               
            }


            const newProd={...prod,quantity:qty}
            
            setProdCartList(newList);
            

        }
        const removeProd = (idProd)=>{
            const  copyArray = [ ...prodCartList];
            const newArray = copyArray.filter(elm=>elm.id !== idProd);
            setProdCartList(newArray);
        }
        const clearProdCartList=()=>{
            setProdCartList([])
        }
    
        const getTotalProds = ()=>{
            const totalProds = prodCartList.reduce((acc,item)=>acc+item.quantity,0)
            return totalProds;
        }
    
 return(
        <CartContext.Provider value={{prodCartList,addProd, removeProd,clearProdCartList, isInCart, getTotalProds}}>
            {children}
        </CartContext.Provider>
    )
    }