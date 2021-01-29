import React, {useEffect, useState} from "react";
import Header from "../sections/header/Header";
import SidebarContainer from "../sections/sidebar/SidebarContainer";
import {NavLink} from "react-router-dom";

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

                <div className="content-breadcrumb">
                    <ol className="breadcrumb">
                        <li>
                            <NavLink to="/">Dashboard</NavLink>
                        </li>
                        <li className="active">Contacts</li>
                        <li className="active">Contacts</li>
                    </ol>
                </div> {/*create component*/}

                <div className="content-header">
                    <h1>
                        Contacts
                    </h1>
                </div> {/*create component*/}

                <div className="content">
                    {props.children}
                </div>

            </div>
        </>
    )
}

export default Wrapper;
