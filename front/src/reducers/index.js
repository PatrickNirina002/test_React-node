import { combineReducers } from 'redux';
import errorReducer from './errorsReducer';
import authReducer from './AuthReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer
});