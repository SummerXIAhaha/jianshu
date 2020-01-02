import React , { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';

interface Props {
  recoms: Array<any>;
}
class Recommend extends Component<Props> {
  render() {
    return (
      <RecommendWrapper>
				{
					this.props.recoms.map((item, index) => {
						return <RecommendItem imgUrl={item.url} key={index}/>
					})
				}
			</RecommendWrapper>
    )
  }
}

export default Recommend;