import React from 'react';
import {Field, reduxForm} from "redux-form";
import PropTypes from 'prop-types';
import {renderInput} from "../../Input/renderInput";

const FirstStep = props => {
    const {validFlags} = props;
    return (
        <React.Fragment >
            <div className="form__row">
                <Field
                    name="type"
                    component={renderInput}
                    error={validFlags.type}
                    label="Тип заявки"
                    type="text"
                    className="input"
                />
                <Field
                    name="date"
                    component={renderInput}
                    className="input"
                    error={validFlags.date}
                    label="Дата"
                    type="date"
                />
            </div>
            <div className="form__row">
                <Field
                    name="text1"
                    component={renderInput}
                    error={validFlags.text1}
                    type="text"
                    label="Text1"
                    className="input"
                />
                <Field
                    name="text2"
                    component={renderInput}
                    error={validFlags.text2}
                    type="text"
                    label="Text2"
                    className="input"
                />
            </div>
            <div  className="form__row">
                <Field
                    name="number1"
                    component={renderInput}
                    error={validFlags.number1}
                    type="text"
                    label="Number1"
                    className="input"
                />
                <Field
                    name="number2"
                    component={renderInput}
                    error={validFlags.number2}
                    type="text"
                    label="Number2"
                    className="input"
                />
            </div>
            <div  className="form__row">
                <Field
                    name="text3"
                    component={renderInput}
                    error={validFlags.text3}
                    type="text"
                    label="Text3"
                    className="input"
                />
                <Field
                    name="text4"
                    component={renderInput}
                    error={validFlags.text4}
                    type="text"
                    label="Text4"
                    className="input"
                />
            </div>
        </React.Fragment>
    )
};

FirstStep.propTypes = {
    validFlags: PropTypes.object.isRequired,
};

export default reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(FirstStep);