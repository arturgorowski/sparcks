import validation from 'validate.js';
import strings from '../localization';

export default function validate(fieldName, value) {
    const constraints = {
        // email: {
        //     presence: true,
        //     format: {
        //         pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //         message: strings.validator_email_format,
        //     },
        // },
        username: {
            presence: {
                allowEmpty: false,
                message: strings.validator_username_required,
            },
        },
        password: {
            presence: {
                allowEmpty: false,
                message: strings.validator_password_required,
            },
        },
        confirmPassword: {
            presence: true,
            equality: 'password',
        },
    };

    const formValues = {};
    formValues[fieldName] = value;

    const formFields = {};
    formFields[fieldName] = constraints[fieldName];


    const result = validation(formValues, formFields);

    if (result) {
        return result[fieldName][0].split(' ').slice(1).join(' ');
    }
    return null;
}
