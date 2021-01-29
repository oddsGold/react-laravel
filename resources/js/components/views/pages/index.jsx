import React from "react";
import Wrapper from "../Layout/Wrapper";
import {NavLink} from "react-router-dom";

function Index(props) {
    return (
        <Wrapper>
            Home page
            <NavLink to="admin/login">Login Page</NavLink>
        </Wrapper>
    )
}
export default Index;
