import './RequestForm.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {reduxForm, formValueSelector} from 'redux-form';
import PropTypes from "prop-types";
import validate from './validateRules';
import Api from '../../utils/api';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import Button from '../button';

const RequestForm = (props) => {
    const [currentForm, setForm] = useState(1);
    const {testForm, auth} = props;
    const [formValidFlags, setFormValidFlags] = useState({});
    const [consent, setConsent] = useState(false);

    const validateForm = (formNumber) => {
        const validObj = {};
        let validArr;
        validArr = validate[formNumber](testForm ? {...testForm} : {});
        if(validArr && validArr.length > 0 ) {
            validArr.forEach(item => validObj[item.path] = item.message);
            setFormValidFlags(validObj);
            return false;
        }
        return true;

    };

    const handleNextStep = () => {
        if(validateForm(currentForm))
            setForm(currentForm + 1);
    };

    const handlePrevStep = () => {
        setForm(currentForm - 1);
    };

    const handleInputChange = () => setConsent(!consent);

    const sendNote = async () => {
        setConsent(false);
        try {
            const response = await Api.addNote({...testForm, auth});
            console.log(response);
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
       <div className="form">
               <div className='form__wrapper'>
                   <div className="form__inputs">
                       { currentForm === 1 && <FirstStep validFlags={formValidFlags}/> }
                       { currentForm === 2 && <SecondStep validFlags={formValidFlags}/> }
                       { currentForm === 3 && <ThirdStep validFlags={formValidFlags}/> }
                       { currentForm === 4 && renderLastStep() }
                   </div>

                   <div className="form__buttons">
                       {
                           currentForm !== 1 && <Button
                               parent="form__left-button"
                               text="Prev"
                               onClick={handlePrevStep}
                           />
                       }
                       {
                           currentForm !== 4 && <Button
                               parent="form__right-button"
                               text="Next"
                               onClick={handleNextStep}
                           />
                       }
                   </div>
               </div>
       </div>
    );
};

const formFields = [
    'type',
    'date',
    'text1',
    'text2',
    'number1',
    'number2',
    'text3',
    'text4',
    'text5',
    'text6',
    'text7',
    'text8',
    'select1',
    'select2',
    'select3',
    'select4',
];

const mapStateToProps = (state) => {
    const selector = formValueSelector('testForm');
    return {
        auth: state.auth.currentUser,
        testForm: selector(state, ...formFields),
    }
};

RequestForm.propTypes = {
    auth: PropTypes.string.isRequired,
    testForm: PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(reduxForm({
    form: 'testForm',
    destroyOnUnmount: false,
})(RequestForm));
