import React, {useState} from 'react';
import './style.scss';
import { connect } from 'react-redux';
import {reduxForm, formValueSelector} from 'redux-form';
import validate from './validateRules';
import Api from '../../utils/api';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const Form = (props) => {
    const [currentForm, setForm] = useState(1);
    const {testForm} = props;
    const [formValidFlags, setFormValidFlags] = useState({});
    const [consent, setConsent] = useState(false);


    const validateForm = (formNumber) => {
        const validObj = {};
        let validArr;
        switch(formNumber) {
            case 1:
                validArr = validate.firstStep(testForm ? {...testForm} : {});
                break;
            case 2:
                validArr = validate.secondStep(testForm ? {...testForm} : {});
                break;
            case 3:
                validArr = validate.thirdStep(testForm ? {...testForm} : {});
                break;
            default:
                validArr = false;
        }
        if(validArr && validArr.length > 0 ) {
            validArr.forEach(item => validObj[item.path] = item.message);
            setFormValidFlags(validObj);
            return false;
        }
        return true;

    };

    const handleNextStep = () => {
        // if(validateForm(currentForm))
            setForm(currentForm + 1);
    };

    const handlePrevStep = () => {
        setForm(currentForm - 1);
    };

    const handleInputChange = () => setConsent(!consent);

    const sendNote = async () => {
        setConsent(false);
        try {
            const response = await Api.addNote(testForm);
        }
        catch(error) {
            console.log('error - ', error);
        }
    };

    const renderLastStep = () => (
            <div style={currentForm === 4 ? {display: 'block'} : {display: 'none'}}>
                <label>
                    Потвердить согласие :
                    <input type="checkbox" checked={consent} onChange={handleInputChange} />
                </label>
                <div>
                    {consent && <input type="button" onClick={sendNote} value="Отправить" className="button"/>}
                </div>
            </div>
    );
    return(
       <div className='form_container'>
               <div className='form_content'>
                   <div className="inputs_wrapper">
                       { currentForm === 1 && <FirstStep validFlags={formValidFlags}/> }
                       { currentForm === 2 && <SecondStep validFlags={formValidFlags}/> }
                       { currentForm === 3 && <ThirdStep validFlags={formValidFlags}/> }
                       { currentForm === 4 && renderLastStep() }
                   </div>

                   <div className="form_content_buttons">
                       {
                           currentForm !== 1 && <input
                                   type="button"
                                   value="Назад"
                                   onClick={handlePrevStep}
                                   className="form_content_left-button button"
                                />
                       }
                       {
                           currentForm !== 4 && <input
                                   type="button"
                                   value="Вперед"
                                   onClick={handleNextStep}
                                   className="form_content_right-button button"
                                />
                       }
                   </div>
               </div>
       </div>
    );
}

const formFields = [
    'firstName',
    'middleName',
    'age',
    'growth',
    'firstAddress',
    'secondAddress',
    'flower',
    'animal',
    'dish',
    'cafe',
    'direction',
    'color',
    'sideWorld',
    'drink',
];

const mapStateToProps = (state) => {
    const selector = formValueSelector('testForm');
    return {
        auth: state.auth,
        testForm: selector(state, ...formFields),
    }
};


export default connect(mapStateToProps)(reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
})(Form));
