import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

interface GetMoreList {
  (): void
}
interface Props {
  getMoreList: GetMoreList;
  articals: {_id: string; img: string; title: string; description: string}[];
}
class List extends Component<Props> {
  render() {
    const { getMoreList } = this.props;
    return (
      <div>
        {this.props.articals.map((item) => (
          <Link to={`/detail?id=${item._id}`} key={item._id}>
          {/* <Link to={`/detail/${item._id}`} key={item._id}> */}
            <ListItem>
              <img alt='' className='pic' src={item.img} />
              <ListInfo>
                <h3 className='title'>{item.title}</h3>
                <p className='desc'>{item.description}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={getMoreList}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = () => {
  return {

  }
};

const mapDispatch = (dispatch) => {
  return {
    getMoreList() {
      dispatch(actionCreators.getMoreList());
    }
  }
};

export default connect(mapState, mapDispatch)(List);