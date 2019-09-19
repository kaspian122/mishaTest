import Schema from 'validate'

const firstStepRules = new Schema({
    text1: {
        type: String,
        required: true,
        length: {min:1, max: 20},
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
    text2: {
        type: String,
        required: true,
        length: {min:1, max: 20},
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
    number1: {
        required: true,
        type: String,
        match: /^[0-9]+$/,
    },
    number2: {
        type: String,
        required: true,
        match: /^[0-9]+$/,
        length: {min: 1, max: 3},
    },
    text3: {
        type: String,
        required: true,
        length: {min: 1, max: 20},
    },
    text4: {
        type: String,
        required: true,
        length: {min: 1, max: 20},
    }
});

const secondStepRules = new Schema({
    text5: {
        type: String,
        required: true,
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
    text6: {
        type: String,
        required: true,
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
    text7: {
        type: String,
        required: true,
        match: /^[а-яА-ЯA-Za-z]+$/,
        message: 'dish'
    },
    text8: {
        type: String,
        required: true,
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
});

const thirdStepRules = new Schema({
    select1: {
        type: String,
        required: true,
        enum: ['yes', 'no'],
    },
    select2: {
        type: String,
        required: true,
        enum: ['purple', 'black', 'red', 'white'],
    },
    select3: {
        type: String,
        required: true,
        enum: ['east', 'west', 'north', 'south'],
    },
    select4: {
        type: String,
        required: true,
        enum: ['tea', 'coffee', 'water'],
    },
});

const firstStep = values => firstStepRules.validate(values);
const secondStep = values => secondStepRules.validate(values);
const thirdStep = values => thirdStepRules.validate(values);

const validate = {
    firstStep,
    secondStep,
    thirdStep
};

export default validate;