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
import UserEditReduxForm from "./UserEditForm";

function UserEditContainer(props) {

    const [userImage, getUserIcon] = useState(props.avatar_img);

    const onSubmit = (formData) => {
        props.updateUsersTC(formData.id, formData.name, formData.email, formData.password);
    }

    const onChange = (formData) => {
        if(formData.file) {
            props.savePhotoTC(formData.id, formData.file);
        }
    }

    useEffect(() => {
        getUserIcon(props.avatar_img);
    },[props.avatar_img])

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
                    : <UserEditReduxForm
                        onSubmit={onSubmit}
                        onChange={onChange}
                        avatar_img={userImage}
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
