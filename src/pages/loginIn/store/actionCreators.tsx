import request from '../../../resource/index';

export const loginUp = (params) => {
  return (dispatch) => {
    request.post('/loginUp', params).then((res) => {
      console.log(res);
    })
  }
}