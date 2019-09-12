import React from 'react';
import {Field, reduxForm} from "redux-form";

const ThirdStep = props => {
    const validFlags = props;
    return (
        <React.Fragment>
            <div className="content_row">
                <div>
                    <div className='input_label'>Направление</div>
                    <Field name="direction" component="select">
                        <option/>
                        <option value ='front'> FrontEnd</option>
                        <option value='back'>BackEnd</option>
                    </Field>
                </div>
                <div>
                    <div className='input_label'>Любимый цвет</div>
                    <Field name="color" component="select">
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
                    <div className='input_label'>Сторона света</div>
                    <Field name="sideWorld" component="select">
                        <option/>
                        <option value="east"> Восток</option>
                        <option value="west"> Запад</option>
                        <option value='north'> Север</option>
                        <option value="south"> Юг </option>
                    </Field>
                </div>
                <div>
                    <div className='input_label'>Напиток</div>
                    <Field name="drink" component="select">
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