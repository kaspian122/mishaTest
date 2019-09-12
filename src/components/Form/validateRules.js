import Schema from 'validate'

const firstStepRules = new Schema({
    firstName: {
        type: String,
        required: true,
        length: {min:1, max: 20},
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
    middleName: {
        type: String,
        required: true,
        length: {min:1, max: 20},
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
    age: {
        required: true,
        type: String,
        match: /^[0-9]+$/,
    },
    growth: {
        type: String,
        required: true,
        match: /^[0-9]+$/,
        length: {min: 2, max: 3},
    },
    firstAddress: {
        type: String,
        required: true,
        length: {min: 1, max: 20},
    },
    secondAddress: {
        type: String,
        required: true,
        length: {min: 1, max: 20},
    }
});

const secondStepRules = new Schema({
    flower: {
        type: String,
        required: true,
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
    animal: {
        type: String,
        required: true,
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
    dish: {
        type: String,
        required: true,
        match: /^[а-яА-ЯA-Za-z]+$/,
        message: 'dish'
    },
    cafe: {
        type: String,
        required: true,
        match: /^[а-яА-ЯA-Za-z]+$/,
    },
});

const thirdStepRules = new Schema({
    direction: {
        type: String,
        required: true,
        enum: ['front', 'back'],
    },
    color: {
        type: String,
        required: true,
        enum: ['purple', 'black', 'red', 'white'],
    },
    sideWorld: {
        type: String,
        required: true,
        enum: ['east', 'west', 'north', 'south'],
    },
    drink: {
        type: String,
        required: true,
        enum: ['tea', 'coffee', 'water'],
    },
});

const firstStep = values => firstStepRules.validate(values);
const secondStep = values => secondStepRules.validate(values).errors;
const thirdStep = values => thirdStepRules.validate(values).errors;

const validate = {
    firstStep,
    secondStep,
    thirdStep
};

export default validate;