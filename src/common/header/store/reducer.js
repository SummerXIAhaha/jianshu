import * as constant from './constant';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isFocus: false,
  list: [],
  page: 0,
  totalPage: 0,
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constant.FOCUSE_HANDLE: 
      return state.set('isFocus', true);
    case constant.BLUR_HANDLE:
      return state.set('isFocus', false);
    case constant.GET_SEARCH_LIST:
      return state.merge({
        list: fromJS(action.list),
        totalPage: Math.ceil(action.list.length / 10),
      });  
    default: 
      return state;
  }
}

export default reducer;