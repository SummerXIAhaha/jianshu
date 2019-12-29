import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as HomeReducer } from '../pages/home/store';
import { reducer as LoginReducer } from '../pages/loginIn/store';

export default combineReducers({
  header: headerReducer,
  Home: HomeReducer,
  login: LoginReducer
})
