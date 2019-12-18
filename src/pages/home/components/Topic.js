import React , { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper } from '../style';


class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <div className="topicItem">
          社会热点
          <img className="topic-pic" src="https://t10.baidu.com/it/u=287583900,2572802818&fm=76" alt=""/>
        </div>
        <div className="topicItem">
          社会热点
          <img className="topic-pic" src="https://t10.baidu.com/it/u=287583900,2572802818&fm=76" alt=""/>
        </div>
        <div className="topicItem">
          社会热点
          <img className="topic-pic" src="https://t10.baidu.com/it/u=287583900,2572802818&fm=76" alt=""/>
        </div>
        <div className="topicItem">
          社会热点
          <img className="topic-pic" src="https://t10.baidu.com/it/u=287583900,2572802818&fm=76" alt=""/>
        </div>
        <div className="topicItem">
          社会热点
          <img className="topic-pic" src="https://t10.baidu.com/it/u=287583900,2572802818&fm=76" alt=""/>
        </div>
        <div className="topicItem">
          社会热点
          <img className="topic-pic" src="https://t10.baidu.com/it/u=287583900,2572802818&fm=76" alt=""/>
        </div>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);