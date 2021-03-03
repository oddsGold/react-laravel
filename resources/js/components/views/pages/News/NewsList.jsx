import React from "react";
import {NavLink} from "react-router-dom";

function UsersList(props) {
    return (
        <div className='news-list'>
            <div className="news-list-table">
                <div className="news-list-table-header">
                    <div className="row">
                        <div className="col-md-4">
                            <p>Title</p>
                        </div>
                        <div className="col-md-2 text-center">
                            <p>Language</p>
                        </div>
                        <div className="col-md-2 text-center">
                            <p>Views</p>
                        </div>
                        <div className="col-md-2 text-center">
                            <p>Date</p>
                        </div>
                    </div>
                </div>
                <div className="news-list-table-body">
                    {
                        props.news.map((item, i) => {
                            return (
                                <div className="news-list-table-body-row" key={item.id}>
                                    <div className='row'>
                                        <div className="col-md-4">
                                            <NavLink to={'/admin/news/edit/'+item.id}>{item.title}</NavLink>
                                        </div>
                                        <div className="col-md-2 text-center">
                                           <p>{item.lang_id === 1 ? "UKR" : "RU"}</p>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <p>{item.views}</p>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <p>{item.created_at}</p>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <button>Delete</button>
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
