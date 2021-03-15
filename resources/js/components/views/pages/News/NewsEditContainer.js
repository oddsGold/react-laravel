import React, {useEffect, useState} from "react";
import Wrapper from "../../Layout/Wrapper";
import ContentHeader from "../../sections/pagesHeader/ContentHeader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import CollapsedBreadcrumbs from "../../sections/breadcrumbs/Breadcrumbs";
import Preloader from "../../sections/preloader/preloader";
import NewsEditReduxForm from "./NewsEditForm";
import {getCurrentNewsTC, saveImageTC, updateNewsTC} from "../../../reducers/news-reducer";


function NewsEditContainer(props) {

    const [newsImage, getNewsImage] = useState();

    const [categories, getCategories] = useState();

    const onSubmit = (formData) => {
        if(newsImage){
            props.updateNewsTC(formData.id, formData.title, formData.published, formData.keywords, formData.description, newsImage.id);
        }else {
            props.updateNewsTC(formData.id, formData.title, formData.published, formData.keywords, formData.description);
        }
    }

    useEffect(() => {
        if(props.categories){
            getCategories(props.categories.map((i) => {
                return i.title;
            }))
        }
    }, [props.categories])

    useEffect(() => {
        getNewsImage(props.tempNewsImage);
    },[props.tempNewsImage])

    useEffect(() => {
        getNewsImage(props.currentNewsImage);
    },[props.currentNewsImage])

    useEffect(() => {
        let id = props.match.params.newsId;
        props.getCurrentNewsTC(id);
    }, [props.match.params])

    const BreadcrumbsPath = [
        "news", "Update news"
    ]

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
                        newsImage={newsImage}
                        saveImageTC={props.saveImageTC}
                        id={props.id}
                        categories={categories}
                    />
            }

        </Wrapper>
    )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.users.isFetching,
        currentNewsImage: state.news.currentNews.news_image,
        tempNewsImage: state.news.tempNewsImage,
        id: state.news.currentNews.id,
        categories:state.news.currentNews.categories
    }
}

export default compose(
    connect(mapStateToProps, {
        getCurrentNewsTC,
        saveImageTC,
        updateNewsTC
    }),
    withRouter
)(NewsEditContainer);
