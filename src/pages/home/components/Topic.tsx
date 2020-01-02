import React , { Component } from 'react';
import { TopicWrapper } from '../style';


interface Props {
  topics: Array<any>;
}
class Topic extends Component<Props> {

  render() {
    return (
      <TopicWrapper>
        {this.props.topics.map((item, index) => (
          <div className="topicItem" key={index}>
            {item.title}
            <img className="topic-pic" src={item.img} alt=""/>
          </div>
        ))
      }
      </TopicWrapper>
    )
  }
}

export default Topic;