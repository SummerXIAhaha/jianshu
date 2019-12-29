import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultState = fromJS({
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
}

export default reducer;