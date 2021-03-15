import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input, renderMultiselect, renderDateTimePicker, FileInput} from "../../../Helpers/FormsControls/Forms";

function NewsEditForm(props) {

    const {error, handleSubmit} = props

    const onChange = (formData) => {
        if(formData) {
            props.saveImageTC(props.id, formData);
        }
    }

    return(
        <div className="update-form">
            <form onSubmit={handleSubmit} className="update">
                {error
                    ? Object.keys(error).map((item, key) => <li key={key} className="list-error">{error[item]}</li>)
                    : ""
                }

                <div className="floating-label form-group">
                    <label htmlFor="title">Title:</label>
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

                <div className="floating-label form-group">
                    <label htmlFor="description">Category:</label>
                    <Field name="category" component={renderMultiselect} selectCategory={props.categories} data={props.categories}/>
                </div>

                <div className="floating-label form-group">
                    <label htmlFor="description">Date Piker:</label>
                    <Field name="date" showTime={false} component={renderDateTimePicker} />
                </div>

                {props.newsImage
                    ? <div className="preview-image">
                        <img src={props.newsImage.path+props.newsImage.image_name} alt=""/>
                    </div>
                    : <div className="preview-image">
                        <img src="/img/avatar/profile-pic-icon.png" alt=""/>
                    </div>
                }

                <div className="floating-label form-group form-element-upload well">
                    <label htmlFor="file">Image:</label>
                    <Field name="file" className="form-control-file" component={FileInput} type="file"
                           onChange={onChange}/>
                </div>

                <div>
                    <button className="btn btn-primary">Update</button>
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
            description: state.news.currentNews.description,
            published: state.news.currentNews.published,
            id: state.news.currentNews.id
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
