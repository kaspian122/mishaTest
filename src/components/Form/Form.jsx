import React, {useState} from 'react';
import './style.scss';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {renderInput} from '../../utils/renderInput';
import validate from './validateRules';

function Form(props){
    const [currentForm, setForm] = useState(1);
    const {handleSubmit, testForm} = props;
    const [firstStepValidFlags, setFirstStepValidFlags] = useState({});


    const validateForm = (formNumber) => {

    }

    const nextStep = () => {
        const validObj = {};
        let validArr;
        switch(currentForm) {
            case 1:
                validArr = validate.firstStep(testForm.values ? testForm.values : {});
                validArr.forEach(item => validObj[item.path] = item.message);
                setFirstStepValidFlags(validObj);
                break;
            case 2:
                validArr = validate.secondStep(testForm.values ? testForm.values : {});
                validArr.forEach(item => validObj[item.path] = item.message);
                setFirstStepValidFlags(validObj);
                break;
            case 3:
                validArr = validate.thirdStep(testForm.values ? testForm.values : {});
                validArr.forEach(item => validObj[item.path] = item.message);
                setFirstStepValidFlags(validObj);
                break;
        }
        // setForm(currentForm + 1);
    };

    const prevStep = () => {
        setForm(currentForm - 1);
    };

    const renderFirstStep = () => {
        return(
            <React.Fragment>
                <div className="content_row">
                    <Field name="firstName" component={renderInput} error={firstStepValidFlags.firstName} type="text" label="First name"/>
                    <Field name="middleName" component={renderInput} type="text" label="Middle name"/>
                </div>
                <div className="content_row">
                    <Field name="age" component={renderInput} type="text" label="Age"/>
                    <Field name="growth" component={renderInput} type="text" label="Growth"/>
                </div>
                <div className="content_row">
                    <Field name="FirstAddress" component={renderInput} type="text" label="First address"/>
                    <Field name="SecondAddress" component={renderInput} type="text" label="Second address"/>
                </div>
            </React.Fragment>
        )
    };

    const renderSecondStep = () => {
        return (
            <React.Fragment>
                <div className="content_row">
                    <Field name="flower" component={renderInput} label="Цветок" type="text"/>
                    <Field name="animal" component={renderInput} label="Животное" type="text"/>
                </div>
                <div className="content_row">
                    <Field name="dish" component={renderInput}  label="Блюдо" type="text"/>
                    <Field name="cafe" component={renderInput} label="Любимое кафе" type="text"/>
                </div>
            </React.Fragment>
        )
    };

    const renderThirdStep = () => {
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

    return(
       <div className='form_container'>
           <form onSubmit={handleSubmit}>
               <div className='form_content'>
                   <div className="inputs_wrapper">
                            {currentForm === 1 && renderFirstStep()}
                            {currentForm === 2 && renderSecondStep()}
                            {currentForm === 3 && renderThirdStep()}
                   </div>

                   <div className="form_content_buttons">
                       <input type="button" value="Назад" onClick={prevStep} disabled={currentForm === 1}/>
                       <input type="button" value="Вперед" onClick={nextStep} disabled={currentForm === 3}/>
                   </div>
               </div>
           </form>
       </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        testForm: state.form.testForm,
    }
};

export default connect(mapStateToProps)(reduxForm({
    form: 'testForm',
})(Form));