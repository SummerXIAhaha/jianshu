import React , { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';


class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4824/066b16f3ca11cfb4f2a47b0ecc53010e0e5e5e95.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <List></List>
          <Topic></Topic>
        </HomeLeft>
        <HomeRight>
          <Writer></Writer>
          <Recommend></Recommend>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;