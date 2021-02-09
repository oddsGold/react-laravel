import React from "react";
import Pagination from "react-js-pagination";
import UsersList from "./UsersList";

function UsersPage(props) {

    return (
        <div className="users-page">

            <UsersList
                usersList={props.usersList}
            />

            <Pagination
                activePage={props.activePage}
                itemsCountPerPage={props.perPage}
                totalItemsCount={props.totalItemsCount}
                onChange={props.handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    )
}

export default UsersPage;
