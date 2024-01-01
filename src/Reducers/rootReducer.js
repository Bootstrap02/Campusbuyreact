import { combineReducers } from 'redux';
import {schoolsReducer} from './schoolsReducer';
import {categoryReducer} from './categoryReducer';
import {accessTokenReducer} from './accessTokenReducer';


const rootReducer = combineReducers({
    schools: schoolsReducer,
    categories: categoryReducer,
    accessToken: accessTokenReducer,
});

export default rootReducer