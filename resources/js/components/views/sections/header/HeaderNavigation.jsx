import React from "react";
import {NavLink} from "react-router-dom";

function HeaderNavigation(props) {
    return (
        <nav role="navigation" className="navbar navbar-static-top">
            <a href="#" data-toggle="push-menu" role="button" className="sidebar-toggle">
                <span className="sr-only">Toggle navigation</span></a>
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav"> </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/" target="_blank">
                            To site
                        </a>
                    </li>
                    <li className="dropdown user user-menu">
                        <a href="#" data-toggle="dropdown" aria-expanded="true" className="dropdown-toggle">
                            {/*<img src={props.user.avatar_img} className="user-image" alt="user icon"/>*/}
                            <span className="hidden-xs">oddsGold</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                {/*<img src={props.user.avatar_img} alt={props.user.avatar_img}/>*/}
                                <p>
                                    {/*<small>Registered at <span>{props.user.created_at}</span></small>*/}
                                </p>
                            </li>
                            <li className="user-footer">
                                <NavLink to="/logout" onClick={
                                    (e) => {
                                        e.preventDefault()
                                        props.logout()
                                    }
                                }>
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderNavigation;
