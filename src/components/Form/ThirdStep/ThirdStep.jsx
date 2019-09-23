import React from 'react';
import {Field, reduxForm} from "redux-form";
import {renderSelect} from '../../select/renderSelect';

const ThirdStep = props => {
    const {validFlags} = props;
    return (
        <React.Fragment>
            <div className="form__row">
                <div>
                    <div className="form__input-label">Select1</div>
                    <Field
                        name="select1"
                        component={renderSelect}
                        error={validFlags.select1}
                        className="input"
                    >
                        <option/>
                        <option name='yes'> yes</option>
                        <option name='no'>no</option>
                    </Field>
                </div>
                <div>
                    <div className="form__input-label">Select2</div>
                    <Field
                        name="select2"
                        component={renderSelect}
                        error={validFlags.select2}
                        className="input"
                    >
                        <option/>
                        <option value='purple'> Фиолетовый</option>
                        <option value='red'> Красный</option>
                        <option value='black'> Черный</option>
                        <option value="white"> Белый</option>
                    </Field>
                </div>
            </div>
            <div  className="form__row">
                <div>
                    <div className="form__input-label">Select3</div>
                    <Field
                        name="select3"
                        component={renderSelect}
                        error={validFlags.select3}
                        className="input"
                    >
                        <option/>
                        <option value="east"> Восток</option>
                        <option value="west"> Запад</option>
                        <option value='north'> Север</option>
                        <option value="south"> Юг </option>
                    </Field>
                </div>
                <div>
                    <div className="form__input-label">Select4</div>
                    <Field
                        name="select4"
                        component={renderSelect}
                        error={validFlags.select4}
                        className="input"
                    >
                        <option/>
                        <option value="tea">Чай</option>
                        <option value="coffee">Кофе</option>
                        <option value="water">Вода</option>
                    </Field>
                </div>
            </div>
        </React.Fragment>
    )
};

export default reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
})(ThirdStep);