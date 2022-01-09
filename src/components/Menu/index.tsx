import React from 'react';
import { Link } from 'react-router-dom';
import RodrigoFlix from '../../assets/images/RodrigoFlix.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={RodrigoFlix} alt='RodrigoFlix Logo' />
            </Link>

            <ButtonLink to='/cadastro/Video' className='ButtonLink'>
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;
