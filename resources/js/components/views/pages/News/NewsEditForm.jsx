import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Helpers/FormsControls/Forms";

function NewsEditForm(props) {



    const {error, handleSubmit} = props

    return(
        <div className="update-form">
            <form onSubmit={handleSubmit} className="update">
                {error
                    ? Object.keys(error).map((item, key) => <li key={key} className="list-error">{error[item]}</li>)
                    : ""
                }

                <div className="floating-label form-group">
                    <label htmlFor="name">Title:</label>
                    <Field type="text" placeholder={"Title"} className="form-control" name={"title"} component={Input}/>
                </div>
                <div className="floating-label form-group input-checkbox">
                    <label htmlFor="published">Published:</label>
                    <Field type="checkbox" className="form-control" name={"published"} component={Input}/>
                </div>
                <div className="floating-label form-group">
                    <label htmlFor="keywords">Keywords:</label>
                    <Field type="text" placeholder={"Keywords"} className="form-control" name={"keywords"} component={Input}/>
                </div>
                <div className="floating-label form-group">
                    <label htmlFor="description">Description:</label>
                    <Field type="text" placeholder={"Description"} className="form-control" name={"description"} component={Input}/>
                </div>

                {/*<CKEditor*/}
                {/*    // editor={ Editor }*/}
                {/*    data={props.text}*/}
                {/*    //config={editorConfig}*/}
                {/*    onReady={ editor => {*/}
                {/*        // You can store the "editor" and use when it is needed.*/}
                {/*        console.log( 'Editor is ready to use!', editor );*/}
                {/*    } }*/}
                {/*    onChange={ ( event, editor ) => {*/}
                {/*        const data = editor.getData();*/}
                {/*        console.log( { event, editor, data } );*/}
                {/*    } }*/}
                {/*    onBlur={ ( event, editor ) => {*/}
                {/*        console.log( 'Blur.', editor );*/}
                {/*    } }*/}
                {/*    onFocus={ ( event, editor ) => {*/}
                {/*        console.log( 'Focus.', editor );*/}
                {/*    } }*/}
                {/*/>*/}

            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        initialValues: {
            title: state.news.currentNews.title,
            keywords: state.news.currentNews.keywords,
            description: state.news.currentNews.description
        }
    };
}

const NewsEditReduxForm = connect(mapStateToProps)(reduxForm({
    form: 'news-update',
    touchOnBlur: false,
    enableReinitialize: true,
    multipartForm : true
})(NewsEditForm));

export default NewsEditReduxForm;
