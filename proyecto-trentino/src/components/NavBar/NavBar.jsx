import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
function NavBar(props) {
    return (
        <div>
            <h1>Todo a Medias</h1>
            <ul className='cabecera'>
            
                <a href='#'>Soquetes</a>
                <a href='#'>Media caña</a>
                <a href='#'>Precios</a>
                
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;