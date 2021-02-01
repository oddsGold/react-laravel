import React, {useEffect} from "react";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import './Sidebar.scss';
import {menusItem} from "../../../reducers/navbar-reducer";

function SidebarContainer (props) {

    useEffect(() => {
        props.menusItem()
    },[])

    return (
        <Sidebar menuItems={props.menuItems} />
    )
}

let mapStateToProps = (state) => {
    return{
        menuItems: state.navbar.menuItems
    }
}

export default connect(mapStateToProps, {
    menusItem
})(SidebarContainer);

