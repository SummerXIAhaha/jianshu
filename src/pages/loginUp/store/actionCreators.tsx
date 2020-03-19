import request from '@/resource/index';

// import Toast from '@/common/toast';


export const loginUp = (params) => {
  return (dispatch) => {
    request.post('/users/loginUp', params).then((res) => {
      dispatch({
        type: 'loginUp',
        res,
      })
    })
  }
}