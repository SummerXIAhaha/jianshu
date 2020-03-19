import request from '../../../resource/index';
import Toast from '@/common/toast';

export const loginIn = (params) => {
  return (dispatch) => {
    request.post('/users/loginIn', params).then((res) => {
      if (res.successFlag === 'Y' && res.canLogin === 'Y') {
        dispatch({
          type: 'login',
          login: true,
        });
      } else {
        Toast.info('账号密码错误！');
      }
    })
  }
}