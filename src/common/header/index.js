import React , { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, NavWrapper, SearchInfo } from './style';
import { actionCreators } from './store';


class Header extends Component {
  getSearchList(isFocus, list){
    console.log('liebiao', list);
    if (isFocus) {
      return (
        <SearchInfo>
          <div className='searchInfoTitle'>
            热门搜索
            <span className='searchInfoSwitch'>
              <i className="iconfont spin">&#xe772;</i>换一换
            </span>
          </div>
          <ul className='searchInfoList'>
          {list.map((item, index) => {
            return (<li className='searchInfoItem' key={index}>{item}</li>)
          })}
          </ul>  
        </SearchInfo>
      )
    }
    return null;
  }

  render() {
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
            <NavSearch className={this.props.isFocus ? 'focus' : ''} onFocus={this.props.handleFocus} onBlur={this.props.handleBlur}></NavSearch>
            <span className={this.props.isFocus ? 'focus iconfont search' : 'iconfont search'}>&#xe62e;</span>
            {this.getSearchList(this.props.isFocus, this.props.list)}
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
  console.log(state);
  return {
    isFocus: state.getIn(['header', 'isFocus']),
    list: state.getIn(['header', 'list']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.focuseHandle());
    },
    handleBlur() {
      dispatch(actionCreators.blurHandle());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);