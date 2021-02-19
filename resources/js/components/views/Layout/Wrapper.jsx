import React, {useEffect, useState} from "react";
import Header from "../sections/header/Header";
import SidebarContainer from "../sections/sidebar/SidebarContainer";
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedSuccessApp} from "../../reducers/app-reducer";
import {withAuthRedirect} from "../../Helpers/Hoc/WithAuthRedirect";
import ContentHeader from "../sections/pagesHeader/ContentHeader";
import CollapsedBreadcrumbs from "../sections/breadcrumbs/Breadcrumbs";

function getWindowDimensions() {
    const height = window;
    if (height.innerHeight - 50 <= 528) {
        return {
            "minHeight": 528
        }
    }
    return {
        "minHeight": height.innerHeight - 50
    };
}

function Wrapper(props) {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Header/>

            <SidebarContainer/>

            <div className="content-wrapper" style={windowDimensions}>

                <div className="content">
                    {props.children}
                </div>

            </div>
        </>
    )
}

export default Wrapper;
