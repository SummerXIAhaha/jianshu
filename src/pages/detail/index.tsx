import React , { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props {
  location: any;
}

interface State {
  title: string
  content: string
}

class Detail extends Component<Props & RouteComponentProps ,State> {
  constructor(props) {
    super(props);
    this.state = {
      title: '还是事实说话',
      content: '<img src="//upload-images.jianshu.io/upload_images/1211570-4aa81d5698ffea8c?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp" alt=""/><p><b>如下内容</b>，选自烂番茄、Indiewire、The Playlist、Screen Crush、Slashfilm等影评网站的年度评选。<b>如下内容</b>，选自烂番茄、Indiewire、The Playlist、Screen Crush、Slashfilm等影评网站的年度评选。</p><p><b>如下内容</b>，选自烂番茄、Indiewire、The Playlist、Screen Crush、Slashfilm等影评网站的年度评选。<b>如下内容</b>，选自烂番茄、Indiewire、The Playlist、Screen Crush、Slashfilm等影评网站的年度评选。</p><p><b>如下内容</b>，选自烂番茄、Indiewire、The Playlist、Screen Crush、Slashfilm等影评网站的年度评选。<b>如下内容</b>，选自烂番茄、Indiewire、The Playlist、Screen Crush、Slashfilm等影评网站的年度评选。</p>'
    }
  }

  render() {
    const reg = /id=([a-s0-9]+)/;
    const id = this.props.location.search.match(reg)[1];
    // const id = this.props.match.params.id;
    console.log(id);
    return (
      <DetailWrapper>
        <Header>还是事实说话</Header>
        <Content dangerouslySetInnerHTML={{__html: this.state.content}}>
        </Content>
      </DetailWrapper>
    )
  }
}

export default withRouter(Detail);