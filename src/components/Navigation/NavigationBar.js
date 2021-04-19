import React from 'react';
import {useLocation} from 'react-router-dom';
import NavItem from './NavItem';

const NavigationBar = () =>{
    const location = useLocation();
    const activeLink = location.pathname;
    return(
        <nav  className="py-2 px-3  bg-white">
            <ul className="p-0 m-0 d-flex justify-content-between w-100 list-unstyled">
                <NavItem active={activeLink}  name="Home" url="/">
                    <i className="bi bi-house-door-fill"></i> 
                </NavItem>
                <NavItem active={activeLink}  name="Activity" url="/activity">
                    <i className="bi bi-card-list"></i> 
                </NavItem>
                <NavItem active={activeLink}  name="Wallet" url="/wallet">
                    <i className="bi bi-wallet2"></i>  
                </NavItem>
                <NavItem active={activeLink} name="Shop" url="/shop">
                    <i className="bi bi-shop"></i> 
                </NavItem>
                <NavItem active={activeLink} s name="Gift" url="/gift">
                    <i className="bi bi-gift-fill"></i>  
                </NavItem>
            </ul>
        </nav>

    );
    
}
export default NavigationBar;