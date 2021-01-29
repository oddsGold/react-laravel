import React from "react";

function HeaderNavigation(props) {
    return (
        <nav role="navigation" className="navbar navbar-static-top">
            <a href="#" data-toggle="push-menu" role="button" className="sidebar-toggle">
            <span className="sr-only">Toggle navigation</span></a>
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav"></ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/" target="_blank">
                             To site
                        </a>
                    </li>
                    <li className="dropdown user user-menu">
                        <a href="#" data-toggle="dropdown" aria-expanded="true" className="dropdown-toggle">
                            <img src="" className="user-image"/>
                            <span className="hidden-xs">oddsGold</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header"><img src="" className="img-circle"/><p>
                                oddsGold
                                <small>Registered at 26.01.2021</small></p></li>
                            <li className="user-footer">
                                <a href="https://demo.sleepingowladmin.ru/logout">
                                    Logout </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderNavigation;
