
import * as constant from './constant';
import axios from 'axios';

export const focuseHandle = () => ({
  type: constant.FOCUSE_HANDLE,
});

export const blurHandle = () => ({
  type: constant.BLUR_HANDLE,
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/getsearchList').then((res) => {
      console.log(res);
    })
  }
}