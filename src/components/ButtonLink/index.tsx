import React from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
    to: string;
    className: string;
    children: React.ReactNode;
};

function ButtonLink({ to, children, className }: ButtonLinkProps) {
    // props => objeto que alguma pagina passa

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}

export default ButtonLink;
