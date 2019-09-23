import React from 'react';
import {reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';
import {renderInput} from "../../Input/renderInput";

const SecondStep = props => {
    const {validFlags} = props;
    return (
        <React.Fragment>
            <div  className="form__row">
                <Field
                    name="text5"
                    component={renderInput}
                    error={validFlags.text5}
                    label="Text5"
                    type="text"
                    className="input"
                />
                <Field
                    name="text6"
                    component={renderInput}
                    error={validFlags.text6}
                    label="Text6"
                    type="text"
                    className="input"
                />
            </div>
            <div  className="form__row">
                <Field
                    name="text7"
                    component={renderInput}
                    error={validFlags.text7}
                    label="Text7"
                    type="text"
                    className="input"
                />
                <Field
                    name="text8"
                    component={renderInput}
                    error={validFlags.text8}
                    label="Text8"
                    type="text"
                    className="input"
                />
            </div>
        </React.Fragment>
    )
};

SecondStep.propTypes = {
    validFlags: PropTypes.object.isRequired,
}

export default reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
})(SecondStep);