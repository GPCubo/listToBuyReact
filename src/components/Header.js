import React from 'react';
import './Header.css'
export const Header = () => {
  return <header className='Header'>
            <img src='assets/inventory_white_24dp.svg' className='Header__img' alt='icon'/>
            <h1 className='Header__h1'>Lista de compras</h1>
        </header>;
};
