
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateMDPInput(data) {
    let errors = {};
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password0) ? data.password0 : '';
    
    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors = {message: 'Mot de passe doit avoir au moins 6 caractères'}
        
    }

    if(Validator.isEmpty(data.password)) {
        errors = {message: 'Mot de passe requis'}
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors = {message: 'Mot de passe doit avoir au moins 6 caractères'}
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors = {message: 'Mot de passe non confirmé'}
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors = {message: 'Mot de passe requis'}
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}