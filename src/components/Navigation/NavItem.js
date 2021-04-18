import React from 'react';
import './NavItem.css';

const NavItem = ({name, children,link, active}) => {
    return(
        <li className="text-center m-0 p-0">
        <a className={`${active&&'active'} text-pink my-nav-link  m-0 p-0`} href={link||"#"}>
            <div >{children} </div>
            <span >{name}</span> 
        </a>
        </li>
    );
}

export default NavItem;