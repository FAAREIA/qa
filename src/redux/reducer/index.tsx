import {combineReducers} from 'redux';
import edit from './edit';
import error from './error';
import loading from './loading';
import question from './question';

const rootReducer = combineReducers({edit, error, loading, question});

export default rootReducer;