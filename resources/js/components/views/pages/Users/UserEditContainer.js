import React, {useEffect, useState} from "react";
import Wrapper from "../../Layout/Wrapper";
import ContentHeader from "../../sections/pagesHeader/ContentHeader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {savePhotoTC, updateUsersTC, userProfileTC} from "../../../reducers/user-reduser";
import Preloader from "../../sections/preloader/preloader";
import CollapsedBreadcrumbs from "../../sections/breadcrumbs/Breadcrumbs";
import UserEditReduxForm from "./UserEditForm";

function UserEditContainer(props) {

    const [userImage, getUserIcon] = useState();

    const onSubmit = (formData) => {
        if(userImage){
            props.updateUsersTC(formData.id, formData.name, formData.email, formData.password, userImage.id);
        }else {
            props.updateUsersTC(formData.id, formData.name, formData.email, formData.password);
        }
    }

    useEffect(() => {
        getUserIcon(props.tempUserImage);
    },[props.tempUserImage])

    useEffect(() => {
        getUserIcon(props.profileUserImage);
    },[props.profileUserImage])


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
                        userImage={userImage}
                        savePhotoTC={props.savePhotoTC}
                        id={props.id}
                    />
            }

        </Wrapper>
    )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching,
        profileUserImage: state.users.userProfile.user_image,
        tempUserImage: state.users.tempUserImage,
        id: state.users.userProfile.id
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
