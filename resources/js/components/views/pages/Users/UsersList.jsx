import React from "react";
import {NavLink} from "react-router-dom";

function UsersList(props) {
    return (
        <div className='users-list'>
            <div className="users-list-table">
                <div className="users-list-table-header">
                    <div className="row">
                        <div className="col-md-3">
                            <p>Username</p>
                        </div>
                        <div className="col-md-6">
                            <p>Email</p>
                        </div>
                    </div>
                </div>
                <div className="users-list-table-body">
                    {
                        props.usersList.map((user, i) => {
                            return (
                                <div className="users-list-table-body-row" key={user.id}>
                                    <div className='row'>
                                        <div className="col-md-3">
                                            <NavLink to={'/admin/users/'+user.id+'/edit'}>{user.name}</NavLink>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UsersList;
