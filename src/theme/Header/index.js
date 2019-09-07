import React from 'react';

import './styles.css'

const Header = () => (
    <div className='my-container' >
        <div className='container-icon'>
            <i className="fa fa-bars" />
        </div>
        <div className='network'>
            <a href='https://github.com/vitorrios1001' target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
            </a>
            <a href='https://www.instagram.com/vitorluizrios/' target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" />
            </a>
            <a href='https://www.linkedin.com/in/vitorluizrios' target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
            </a>
            <a href='https://www.facebook.com/vitorluizrios' target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-f" />
            </a>
        </div>
    </div>
)

export default Header;