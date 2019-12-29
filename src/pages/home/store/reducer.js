import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultState = fromJS({
  topicList: [],
  homeInfo: {},
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case constant.GET_TOPICS: 
      return state.set('topicList', action.list);
    case constant.GET_HOME_INFO: 
      return state.set('homeInfo', action.list);
    case constant.GET_MORE_LIST: 
      let list = state.toJS().homeInfo.articals;
      console.log('list', state.toJS());
      list = list.concat(action.list);
      return state.setIn(['homeInfo', 'articals'], list);
    default: 
      return state;
  }
}

export default reducer;