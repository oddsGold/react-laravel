import React, {useEffect, useState} from "react";
import Wrapper from "../../Layout/Wrapper";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "../../sections/preloader/preloader";
import ContentHeader from "../../sections/pagesHeader/ContentHeader";
import CollapsedBreadcrumbs from "../../sections/breadcrumbs/Breadcrumbs";
import NewsPage from "./NewsPage";
import {getNewsTC} from "../../../reducers/news-reducer";
import "./News.scss"
import UserEditReduxForm from "../Users/UserEditForm";

function NewsContainer(props) {
    const [activePage, setActivePage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        props.getNewsTC(activePage, pageSize);
    }, [])

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        props.getNewsTC(pageNumber, pageSize);
    }

    const BreadcrumbsPath = [
        "news"
    ]

    return (
        <Wrapper>

            <CollapsedBreadcrumbs pathnames={BreadcrumbsPath} />

            <ContentHeader>
                News
            </ContentHeader>

            {
                !props.isFetching
                    ? <Preloader/>
                    : null
            }

            <NewsPage
                activePage={activePage}
                totalItemsCount={props.totalNewsCount}
                perPage={props.perPage}
                handlePageChange={handlePageChange}
                news={props.news}
            />

        </Wrapper>
    )
}

let mapStateToProps = (state) => {
    return {
        news: state.news.news,
        isFetching: state.users.isFetching,
        totalNewsCount: state.news.totalNewsCount,
        perPage: state.news.perPage
    }
}

export default compose(
    connect(mapStateToProps,
        {
            getNewsTC
        })
)(NewsContainer);
