import React from "react";
import Pagination from "react-js-pagination";

function UsersPage(props) {

    return (
        <div className="users-page">
            <h1>Пользователи</h1>

            <Pagination
                activePage={props.activePage}
                itemsCountPerPage={props.perPage}
                totalItemsCount={props.totalItemsCount}
                onChange={props.handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />


            {
                props.usersList.map((user, i) => {
                    return <div key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                })
            }
        </div>
    )
}

export default UsersPage;
