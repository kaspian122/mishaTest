import React from 'react';
import {Field, reduxForm} from "redux-form";
import {renderInput} from "../../../utils/renderInput";

const FirstStep = props => {
    const {validFlags} = props;
    return (
        <React.Fragment >
            <div className="content_row">
                <Field name="type" component={renderInput} error={validFlags.text7} label="Тип заявки" type="text"/>
                <Field name="date" component={renderInput} error={validFlags.text7} label="Дата" type="date"/>
            </div>
            <div className="content_row">
                <Field name="text1" component={renderInput} error={validFlags.text1} type="text" label="Text1"/>
                <Field name="text2" component={renderInput} error={validFlags.text2} type="text" label="Text2"/>
            </div>
            <div className="content_row">
                <Field name="number1" component={renderInput} error={validFlags.number1} type="text" label="Number1"/>
                <Field name="number2" component={renderInput} error={validFlags.number2} type="text" label="Number2"/>
            </div>
            <div className="content_row">
                <Field name="text3" component={renderInput}  error={validFlags.text3} type="text" label="Text3"/>
                <Field name="text4" component={renderInput} error={validFlags.text4} type="text" label="Text4"/>
            </div>
        </React.Fragment>
    )
};

export default reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(FirstStep);