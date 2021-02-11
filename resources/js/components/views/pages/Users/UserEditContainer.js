import React, {useEffect} from "react";
import Wrapper from "../../Layout/Wrapper";
import ContentHeader from "../../sections/pagesHeader/ContentHeader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import UserEditForm from "./UserEditForm";
import {updateUsersTC, userProfileTC} from "../../../reducers/user-reduser";
import Preloader from "../../sections/preloader/preloader";

function UserEditContainer(props) {

    const onSubmit = (formData) => {
        props.updateUsersTC(formData.id, formData.name, formData.email, formData.password);
    }

    useEffect(() => {
        let id = props.match.params.userId;

        props.userProfileTC(id);
    }, [props.match.params])

    return (
        <Wrapper>

            <ContentHeader>
                User edit form
            </ContentHeader>

            {
                props.isFetching
                    ? <Preloader/>
                    : <UserEditForm onSubmit={onSubmit}/>
            }

        </Wrapper>
    )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching,
    }
}

export default compose(
    connect(mapStateToProps, {
        userProfileTC,
        updateUsersTC
    }),
    withRouter
)(UserEditContainer);
