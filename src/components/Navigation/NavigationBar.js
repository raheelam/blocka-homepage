import React from 'react';
import NavItem from './NavItem';

const NavigationBar = () =>{
    return(
        <nav  className="p-2 bg-white">
            <ul className="p-0 m-0 d-flex justify-content-between w-100 list-unstyled">
                <NavItem active={true} name="Home" >
                    <i className="bi bi-house-door-fill"></i> 
                </NavItem>
                <NavItem name="Activity" >
                    <i className="bi bi-card-list"></i> 
                </NavItem>
                <NavItem name="Wallet" >
                    <i className="bi bi-wallet2"></i>  
                </NavItem>
                <NavItem name="Shop" >
                    <i className="bi bi-shop"></i> 
                </NavItem>
                <NavItem name="Gift" >
                    <i className="bi bi-gift-fill"></i>  
                </NavItem>
            </ul>
        </nav>

    );
    
}
export default NavigationBar;