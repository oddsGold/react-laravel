import React, {useEffect, useState} from "react";
import UsersPage from "./UsersPage";
import Wrapper from "../../Layout/Wrapper";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUsersTC} from "../../../reducers/user-reduser";
import Preloader from "../../sections/preloader/preloader";

function UsersContainer(props) {

    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        props.getUsersTC(activePage);
    }, [])

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        props.getUsersTC(pageNumber)
    }


    return (
        <Wrapper>
            {
                !props.isFetching
                    ? <Preloader/>
                    : null
            }
            <UsersPage
                activePage={activePage}
                totalItemsCount={props.totalUsersCount}
                perPage={props.perPage}
                handlePageChange={handlePageChange}
                usersList={props.usersList}
            />
        </Wrapper>
    )
}

let mapStateToProps = (state) => {
    return {
        usersList: state.users.usersList,
        isFetching: state.users.isFetching,
        totalUsersCount: state.users.totalUsersCount,
        perPage: state.users.perPage
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getUsersTC
        })
)(UsersContainer);
