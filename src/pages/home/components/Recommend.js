import React , { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';


class Recommend extends Component {
  constructor(props) {
    super(props);
  }
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