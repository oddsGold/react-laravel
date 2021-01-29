import React from 'react';
import './header.scss';
import HeaderNavigation from "./HeaderNavigation";


function Header(props) {
    return (
        <header className="main-header">
            <a href="#" className='logo'>
                <span className='logo-lg'>
                    oddsGold
                </span>
                <span className='logo-mini'>
                    Gold
                </span>
            </a>
            <HeaderNavigation />
        </header>
    );
}
export default Header;
