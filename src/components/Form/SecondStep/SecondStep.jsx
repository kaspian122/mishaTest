import React from 'react';
import {Field} from "redux-form";
import {renderInput} from "../../../utils/renderInput";
import {reduxForm} from 'redux-form';

const SecondStep = props => {
    const {validFlags} = props;
    return (
        <React.Fragment>
            <div className="content_row">
                <Field name="flower" component={renderInput} error={validFlags.flower} label="Цветок" type="text"/>
                <Field name="animal" component={renderInput} error={validFlags.animal} label="Животное" type="text"/>
            </div>
            <div className="content_row">
                <Field name="dish" component={renderInput} error={validFlags.dish} label="Блюдо" type="text"/>
                <Field name="cafe" component={renderInput} error={validFlags.cafe} label="Любимое кафе" type="text"/>
            </div>
        </React.Fragment>
    )
};

export default reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
})(SecondStep);