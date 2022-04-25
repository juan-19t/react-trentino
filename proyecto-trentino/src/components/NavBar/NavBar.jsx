import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
function NavBar(props) {
    return (
        <div className='cabecera'>
            <h1>Todo a Medias</h1>
            <div className='buttons'>
            
                <a href='#'>Soquetes</a>
                <a href='#'>Media caña</a>
                <a href='#'>Precios</a>
                
            </div>
            <CartWidget />
        </div>
    );
}

export default NavBar;