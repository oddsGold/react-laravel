import React, {useEffect} from "react";
import Wrapper from "../../Layout/Wrapper";
import ContentHeader from "../../sections/pagesHeader/ContentHeader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import UserEditForm from "./UserEditForm";
import {userProfileTC} from "../../../reducers/user-reduser";

function UserEditContainer(props) {

    useEffect(() => {
        let id = props.match.params.userId;

        props.userProfileTC(id);
    },[props.match.params])

    return (
        <Wrapper>

            <ContentHeader>
                Users edit form
            </ContentHeader>

            <UserEditForm />

        </Wrapper>
    )
}

export default compose(
    connect(null, {
        userProfileTC
    }),
    withRouter
)(UserEditContainer);
