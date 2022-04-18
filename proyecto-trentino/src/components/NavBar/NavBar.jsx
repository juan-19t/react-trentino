import React from 'react';
import './NavBar.css';
function NavBar(props) {
    return (
        <div>
            <h1>Todo a Medias</h1>
            <ul className='header'>
            
                <a href='#'>Soquetes</a>
                <a href='#'>Media caña</a>
                <a href='#'>Precios</a>
            </ul>
        </div>
    );
}

export default NavBar;