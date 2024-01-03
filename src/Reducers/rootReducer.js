import { combineReducers } from 'redux';
import {schoolsReducer} from './schoolsReducer';
import {categoryReducer} from './categoryReducer';
import {accessTokenReducer} from './accessTokenReducer';
import {createUserReducer} from './createUserReducer';


const rootReducer = combineReducers({
    schools: schoolsReducer,
    categories: categoryReducer,
    accessToken: accessTokenReducer,
    createUser: createUserReducer,
});

export default rootReducer