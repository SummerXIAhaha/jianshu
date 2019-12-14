
import * as constant from './constant';
import axios from 'axios';

export const focuseHandle = () => ({
  type: constant.FOCUSE_HANDLE,
});

export const blurHandle = () => ({
  type: constant.BLUR_HANDLE,
});

export const getSearchList = (list) => ({
  type: constant.GET_SEARCH_LIST,
  list,
})

export const getList = () => {
  return (dispatch) => {
    // axios.get('/getsearchList').then((res) => {
    //   console.log(res);
    // })
    axios({
      type: 'get',
      baseURL: 'http://localhost:8080/getsearchList'
    }).then((res) => {
      dispatch(getSearchList(res.data));
    })
  }
}