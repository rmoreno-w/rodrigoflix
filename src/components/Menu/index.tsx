import React from 'react';
import { Link } from 'react-router-dom';
import RodrigoFlix from '../../assets/images/RodrigoFlix.png';
import { ButtonLinkk, NavBar, Logo } from './Menu';

function Menu() {
    return (
        <NavBar>
            <Link to='/'>
                <Logo src={RodrigoFlix} alt='RodrigoFlix Logo' />
            </Link>

            <ButtonLinkk to='/cadastro/Video' className='ButtonLink'>
                Novo Vídeo
            </ButtonLinkk>
        </NavBar>
    );
}

export default Menu;
