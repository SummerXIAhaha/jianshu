import React , { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, NavWrapper, SearchInfo } from './style';
import { actionCreators } from './store';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      mouseIn: false,
    }
  }

  handleSwitch(page) {
    const { totalPage } = this.props;
    console.log(page, totalPage);
    if (page < totalPage - 1) {
      this.setState({page: page + 1});
    } else {
      this.setState({page: 0});
    }
  }

  getSearchList(isFocus, list){
    const { mouseIn, page } = this.state;
    console.log('getSearchList', mouseIn, page);
    const showList = list.slice(page * 10, (page + 1 ) * 10);
    console.log('showList', showList);
    if (isFocus || mouseIn) {
      return (
        <SearchInfo onMouseEnter={() => this.setState({mouseIn: true})} onMouseLeave={() => this.setState({mouseIn: false})}>
          <div className='searchInfoTitle'>
            热门搜索
            <span className='searchInfoSwitch' onClick={this.handleSwitch.bind(this, page)}>
              <i className="iconfont spin">&#xe772;</i>换一换
            </span>
          </div>
          <ul className='searchInfoList'>
          {showList.map((item, index) => {
            return (<li className='searchInfoItem' key={index}>{item.name}</li>)
          })}
          </ul>  
        </SearchInfo>
      )
    }
    return null;
  }

  render() {
    const { isFocus, list, handleFocus, handleBlur } = this.props;
    const listJS = list.toJS();
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavWrapper>
            <NavSearch className={isFocus ? 'focus' : ''} onFocus={() => handleFocus(listJS)} onBlur={handleBlur}></NavSearch>
            <span className={isFocus ? 'focus iconfont search' : 'iconfont search'}>&#xe62e;</span>
            {this.getSearchList(isFocus, listJS)}
          </NavWrapper>
        </Nav>
        <Addition>
          <Button className='write'>
            <span className="iconfont">&#xe62d;</span>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFocus: state.getIn(['header', 'isFocus']),
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      if (!list.size) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.focuseHandle());
    },
    handleBlur() {
      dispatch(actionCreators.blurHandle());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);