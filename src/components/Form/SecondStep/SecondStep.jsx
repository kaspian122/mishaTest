import React from 'react';
import {Field} from "redux-form";
import {renderInput} from "../../../utils/renderInput";
import {reduxForm} from 'redux-form';

const SecondStep = props => {
    const {validFlags} = props;
    return (
        <React.Fragment>
            <div className="content_row">
                <Field name="text5" component={renderInput} error={validFlags.text5} label="Text5" type="text"/>
                <Field name="text6" component={renderInput} error={validFlags.text6} label="Text6" type="text"/>
            </div>
            <div className="content_row">
                <Field name="text7" component={renderInput} error={validFlags.text7} label="Text7" type="text"/>
                <Field name="text8" component={renderInput} error={validFlags.text8} label="Text8" type="text"/>
            </div>
        </React.Fragment>
    )
};

export default reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
})(SecondStep);