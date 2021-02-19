import React from "react";
import {Field, reduxForm} from "redux-form";
import {FileInput, Input} from "../../../Helpers/FormsControls/Forms";
import {required} from "../../../Helpers/Validation/validation";
import {connect} from "react-redux";

function UserEditForm(props) {

    const {error, handleSubmit, invalid, submitting} = props

    return (
        <div className="update-form">
            <form onSubmit={handleSubmit} className="update">

                {error
                    ? Object.keys(error).map((item, key) => <li key={key} className="list-error">{error[item]}</li>)
                    : ""
                }

                <div className="floating-label form-group">
                    <label htmlFor="name">Name:</label>
                    <Field type="text" placeholder={"Name"} className="form-control" name={"name"} component={Input} validate={[required]}/>
                </div>
                <div className="floating-label form-group">
                    <label htmlFor="email">Email:</label>
                    <Field type="text" placeholder={"Email"} className="form-control" name={"email"}
                           component={Input} validate={[required]}/>
                </div>

                <div className="floating-label form-group">
                    <label htmlFor="password">Conform Your Password:</label>
                    <Field type="password" placeholder={"Password"} className="form-control" name={"password"} component={Input}/>
                </div>

                <div className="preview-image">
                    <img src={props.avatar_img ? props.avatar_img : ""} alt=""/>
                </div>

                <div className="floating-label form-group form-element-upload well">
                    <label htmlFor="file">Avatar:</label>
                    <Field name="file" className="form-control-file" component={FileInput} type="file" />
                </div>

                <div>
                    <button className="btn btn-primary" disabled={invalid|| submitting}>Update</button>
                </div>
            </form>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        initialValues: {
            name: state.users.userProfile.name,
            email: state.users.userProfile.email,
            password: state.users.userProfile.password,
            id: state.users.userProfile.id
        }
    };
}

const UserEditReduxForm = connect(mapStateToProps)(reduxForm({
    form: 'update',
    touchOnBlur: false,
    enableReinitialize: true,
    multipartForm : true
})(UserEditForm));

export default UserEditReduxForm;
