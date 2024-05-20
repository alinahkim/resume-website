import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-home'>
                    HOME <i className='fab fa-solid fa-house'></i>
                </Link>

            </div>
        </nav>
    </>
  )
}

export default navbar
