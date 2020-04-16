import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';
// import photoReducer from '../reducers/photoReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;