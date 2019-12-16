
import * as constant from './constant';
import request from '../../../resource/index';

const getSearchList = (list) => ({
  type: constant.GET_SEARCH_LIST,
  list,
})
export const focuseHandle = () => ({
  type: constant.FOCUSE_HANDLE,
});

export const blurHandle = () => ({
  type: constant.BLUR_HANDLE,
});

export const getList = () => {
  return (dispatch) => {
    request.get('/getsearchList').then((res) => {
      dispatch(getSearchList(res.data));
    })
    // axios({
    //   type: 'get',
    //   baseURL: 'http://localhost:8080/getsearchList'
    // }).then((res) => {
    //   dispatch(getSearchList(res.data));
    // })
  }
}