import React, { useState } from 'react';
import './ItemCount.css'
function ItemCount({stock, initial}) {
    const [count, setCount] =useState(initial);
    
    // const onAdd=()=>{
    //     console.log('Añadiste tus productos al carrito')
    // }

    const agregaProducto = ()=>{
        if(count<stock  ){
            setCount(count+1);
        }
    }

    const restaProducto =()=>{
        if(count>initial){
            setCount(count - 1);
        }
    }

    return (
        <div className='contador'>
            <button className='contadores' onClick={restaProducto}>-</button>
            <p>{count}</p>
            <button className='contadores' onClick={agregaProducto}>+</button>
            {/* <button className='onAdd'onClick={onAdd}>Añadir al carrito</button> */}
        </div>
    );
}

export default ItemCount;