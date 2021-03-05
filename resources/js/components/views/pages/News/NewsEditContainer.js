import React, {useEffect, useState} from "react";
import Wrapper from "../../Layout/Wrapper";
import ContentHeader from "../../sections/pagesHeader/ContentHeader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import CollapsedBreadcrumbs from "../../sections/breadcrumbs/Breadcrumbs";
import Preloader from "../../sections/preloader/preloader";
import NewsEditReduxForm from "./NewsEditForm";
import {getCurrentNewsTC} from "../../../reducers/news-reducer";


function NewsEditContainer(props) {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    const BreadcrumbsPath = [
        "news", "Update news"
    ]

    useEffect(() => {
        let id = props.match.params.newsId;
        props.getCurrentNewsTC(id);
    }, [props.match.params])

    return (
        <Wrapper>

            <CollapsedBreadcrumbs pathnames={BreadcrumbsPath} />

            <ContentHeader>
                News edit form
            </ContentHeader>


            {
                props.isFetching
                    ? <Preloader/>
                    : <NewsEditReduxForm
                        onSubmit={onSubmit}
                        text={props.text}
                    />
            }

        </Wrapper>
    )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching,
        text: state.news.currentNews.text
    }
}

export default compose(
    connect(mapStateToProps, {
        getCurrentNewsTC
    }),
    withRouter
)(NewsEditContainer);
