import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
function ItemListContainer({greeting}) {
    return (
        <div>
            { greeting }
            <ItemCount initial={1} stock={5}/>
        </div>
    );
}

export default ItemListContainer;