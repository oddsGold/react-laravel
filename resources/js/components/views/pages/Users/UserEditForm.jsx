import React, {useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../Helpers/FormsControls/Forms";
import {required} from "../../../Helpers/Validation/validation";
import {connect} from "react-redux";
import Preloader from "../../sections/preloader/preloader";


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
                    <label htmlFor="password">Password:</label>
                    <Field type="password" placeholder={"Password"} className="form-control" name={"password"} component={Input} />
                </div>
                {/*<div className="floating-label form-group">*/}
                {/*    <label htmlFor="password_conformation">Conform Your Password:</label>*/}
                {/*    <Field type="password" placeholder={"Conform Your Password"} className="form-control" name={"password_confirmation"} component={Input} validate={[required]}/>*/}
                {/*</div>*/}
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
    enableReinitialize: true
})(UserEditForm));

export default UserEditReduxForm;
