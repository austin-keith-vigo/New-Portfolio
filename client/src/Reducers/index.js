import {combineReducers} from 'redux';

//  Reducers
import HomepageReducers from './HomepageReducers';

// Combine reducers and export them
export default combineReducers({
    Homepage: HomepageReducers
});