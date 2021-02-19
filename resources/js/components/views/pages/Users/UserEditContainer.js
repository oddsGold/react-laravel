import React, {useEffect, useState} from "react";
import Wrapper from "../../Layout/Wrapper";
import ContentHeader from "../../sections/pagesHeader/ContentHeader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import UserEditForm from "./UserEditForm";
import {savePhotoTC, updateUsersTC, userProfileTC} from "../../../reducers/user-reduser";
import Preloader from "../../sections/preloader/preloader";
import CollapsedBreadcrumbs from "../../sections/breadcrumbs/Breadcrumbs";

function UserEditContainer(props) {

    const onSubmit = (formData) => {
        props.updateUsersTC(formData.id, formData.file, formData.name, formData.email, formData.password);
        // props.savePhotoTC(formData.file);

    }

    useEffect(() => {
        let id = props.match.params.userId;

        props.userProfileTC(id);
    }, [props.match.params])

    const BreadcrumbsPath = [
        "users", "Update user"
    ]

    return (
        <Wrapper>

            <CollapsedBreadcrumbs pathnames={BreadcrumbsPath} />

            <ContentHeader>
                User edit form
            </ContentHeader>

            {
                props.isFetching
                    ? <Preloader/>
                    : <UserEditForm
                        onSubmit={onSubmit}
                        avatar_img={props.avatar_img}
                    />
            }

        </Wrapper>
    )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching,
        avatar_img: state.users.userProfile.avatar_img
    }
}

export default compose(
    connect(mapStateToProps, {
        userProfileTC,
        updateUsersTC,
        savePhotoTC
    }),
    withRouter
)(UserEditContainer);
