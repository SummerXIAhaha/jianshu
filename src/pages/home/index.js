import React , { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store/index';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScroll: false,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.getHomeList();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 400) {
      this.setState({
        showScroll: true,
      })
    } else {
      this.setState({
        showScroll: false,
      })
    }
  }

  render() {
    const { articals, topics, recoms } = this.props.homeInfo;
    console.log(articals, topics, recoms);
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4824/066b16f3ca11cfb4f2a47b0ecc53010e0e5e5e95.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic topics={topics || []}></Topic>
          <List articals={articals || []}></List>
        </HomeLeft>
        <HomeRight>
          <Recommend recoms={recoms || []}></Recommend>
          <Writer></Writer>
        </HomeRight>
        { this.state.showScroll ? <BackTop onClick={this.handleScrollTop.bind(this)}>回到顶部</BackTop> : ''}
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  homeInfo: state.toJS().Home.homeInfo
})

const mapDispatch = (dispatch) => {
  return {
    getHomeList () {
      dispatch(actionCreators.getHomeList())
    }
  }
}
export default connect(mapState, mapDispatch)(Home);