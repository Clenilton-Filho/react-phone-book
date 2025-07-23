import React from 'react';
import './Header.css';

const Header = function(props){
    return(
        <div className='header'>
            <span>{props.heading}</span>
        </div>
    )
}

export default Header;