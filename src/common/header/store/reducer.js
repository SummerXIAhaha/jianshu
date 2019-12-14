import * as constant from './constant';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isFocus: false,
});

const reducer = (state = defaultState, action) => {
  if (action.type === constant.FOCUSE_HANDLE) {
    // immutable调用set方法会返回一个新的对象
    return state.set('isFocus', true);
  }
  if (action.type === constant.BLUR_HANDLE) {
    return state.set('isFocus', false);
  }
  return state;
}

export default reducer;