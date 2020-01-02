import * as constant from './constant';
import request from '../../../resource/index';

const getTopics = (list) => ({
  type: constant.GET_TOPICS,
  list,
});

const getHomeInfo = (list) => ({
  type: constant.GET_HOME_INFO,
  list,
});

const getMoreInfo = (list) => ({
  type: constant.GET_MORE_LIST,
  list,
});

export const getTopicList = () => {
  return (dispatch) => {
    request.get('/getSearchList').then((res) => {
      dispatch(getTopics(res.data));
    })
  }
}

export const getHomeList = () => {
  return (dispatch) => {
    request.get('/getHomeList').then((res) => {
      dispatch(getHomeInfo(res.data));
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    request.get('/getMoreList').then((res) => {
      dispatch(getMoreInfo(res.data));
    })
  }
}