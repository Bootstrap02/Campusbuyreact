import { combineReducers } from 'redux';
import {schoolsReducer} from './schoolsReducer';
import {categoryReducer} from './categoryReducer';
import {activePageReducer} from './activePageReducer';
import {userTokenReducer} from './userTokenReducer';


const rootReducer = combineReducers({
    schools: schoolsReducer,
    categories: categoryReducer,
    activePage: activePageReducer,
    userToken: userTokenReducer,
});

export default rootReducer