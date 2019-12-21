import React , { Component } from 'react';
import { ListItem, ListInfo } from '../style';


class List extends Component {
  render() {
    return (
      this.props.articals.map((item, index) => (
        <ListItem key={index}>
          <img alt='' className='pic' src={item.img} />
          <ListInfo>
            <h3 className='title'>{item.title}</h3>
            <p className='desc'>{item.description}</p>
          </ListInfo>
        </ListItem>
      ))
    )
  }
}

export default List;