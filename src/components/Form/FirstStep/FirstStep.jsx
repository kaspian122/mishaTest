import React from 'react';
import {Field, reduxForm} from "redux-form";
import {renderInput} from "../../../utils/renderInput";

const FirstStep = props => {
    const {validFlags} = props;
    return (
        <React.Fragment >
            <div className="content_row">
                <Field name="firstName" component={renderInput} error={validFlags.firstName} type="text" label="First name"/>
                <Field name="middleName" component={renderInput} error={validFlags.middleName} type="text" label="Middle name"/>
            </div>
            <div className="content_row">
                <Field name="age" component={renderInput} error={validFlags.age} type="text" label="Age"/>
                <Field name="growth" component={renderInput} error={validFlags.growth} type="text" label="Growth"/>
            </div>
            <div className="content_row">
                <Field name="firstAddress" component={renderInput}  error={validFlags.firstAddress} type="text" label="First address"/>
                <Field name="secondAddress" component={renderInput} error={validFlags.secondAddress} type="text" label="Second address"/>
            </div>
        </React.Fragment>
    )
};

export default reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(FirstStep);