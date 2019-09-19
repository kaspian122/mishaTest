import React from 'react';
import {Field, reduxForm} from "redux-form";
import {renderSelect} from '../../../utils/renderSelect';

const ThirdStep = props => {
    const {validFlags} = props;
    return (
        <React.Fragment>
            <div className="content_row">
                <div>
                    <div className='input_label'>Select1</div>
                    <Field name="select1" component={renderSelect} error={validFlags.select1}>
                        <option/>
                        <option name='yes'> yes</option>
                        <option name='no'>no</option>
                    </Field>
                </div>
                <div>
                    <div className='input_label'>Select2</div>
                    <Field name="select2" component={renderSelect} error={validFlags.select2}>
                        <option/>
                        <option value='purple'> Фиолетовый</option>
                        <option value='red'> Красный</option>
                        <option value='black'> Черный</option>
                        <option value="white"> Белый</option>
                    </Field>
                </div>
            </div>
            <div className="content_row">
                <div>
                    <div className='input_label'>Select3</div>
                    <Field name="select3" component={renderSelect} error={validFlags.select3}>
                        <option/>
                        <option value="east"> Восток</option>
                        <option value="west"> Запад</option>
                        <option value='north'> Север</option>
                        <option value="south"> Юг </option>
                    </Field>
                </div>
                <div>
                    <div className='input_label'>Select4</div>
                    <Field name="select4" component={renderSelect} error={validFlags.select4}>
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