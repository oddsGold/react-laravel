import React from 'react';
import {NavLink} from "react-router-dom";

function Sidebar(props) {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="nav navmenu-nav sidebar-menu" role="navigation">
                    {
                        props.menuItems.map(item => {
                            if (item.child.length <= 0)
                                return <li key={item.id}>
                                    <span>{item.title}</span>
                                </li>
                            else
                                return  <li className="dropdown" key={item.id}>
                                    <span className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{item.title}</span>
                                    {item.child.map((childItem, index) => {
                                        return <ul className="custom-dropdown-menu" key={index}>
                                            <li>
                                                <NavLink to={childItem.url} className="disabled-link">
                                                    <span>{childItem.title}</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    })}
                                </li>
                        })
                    }

                </ul>
            </section>
        </aside>
    );
}

export default Sidebar;
