import React from 'react';
import {Link} from 'react-router-dom';
import './NavItem.css';

const NavItem = ({name, children, url, active}) => {
   
    return(
        <li className="text-center m-0 p-0">
        <Link  className={`${active === url && 'active'} text-pink my-nav-link  m-0 p-0`} to={url||"#"}>
            <div >{children} </div>
            <span >{name}</span> 
        </Link>
        </li>
    );
}

export default NavItem;