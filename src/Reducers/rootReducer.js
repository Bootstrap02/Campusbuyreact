import { combineReducers } from 'redux';
import {schoolsReducer} from './schoolsReducer';
import {categoryReducer} from './categoryReducer';


const rootReducer = combineReducers({
    schools: schoolsReducer,
    categories: categoryReducer,
});

export default rootReducer