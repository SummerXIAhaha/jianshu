import { fromJS } from 'immutable';

const defaultState = fromJS({
  login: false,
});

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'login': 
      return state.set('login', action.login);
    default: 
      return state;
  }
}

export default reducer;