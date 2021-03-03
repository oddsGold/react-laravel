import React from 'react';
import './header.scss';
import HeaderNavigation from "./HeaderNavigation";
import {connect} from "react-redux";
import {logout} from "../../../reducers/auth-reducer";
import {NavLink} from "react-router-dom";


function Header(props) {


    return (
        <header className="main-header">
            <NavLink to="/admin" className='logo'>
                <span className='logo-lg'>
                    oddsGold
                </span>
                <span className='logo-mini'>
                    Gold
                </span>
            </NavLink>
            <HeaderNavigation user={props.user} logout={props.logout} />
        </header>
    );
}

let mapStateToProps = (state) => {
    return{
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {
    logout
})(Header);
