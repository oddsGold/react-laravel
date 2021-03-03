import React from "react";
import Pagination from "react-js-pagination";
import {NavLink} from "react-router-dom";
import NewsList from "./NewsList";

function NewsPage(props) {

    return (
        <div className="news-page">

            <NewsList
                news={props.news}
            />

            {props.totalItemsCount
                ? <Pagination
                    activePage={props.activePage}
                    itemsCountPerPage={props.perPage}
                    totalItemsCount={props.totalItemsCount}
                    onChange={props.handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />
                : ""
            }

        </div>
    )
}

export default NewsPage;
