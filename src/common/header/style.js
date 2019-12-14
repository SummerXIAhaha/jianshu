import styled from 'styled-components';
import LogoPic from '../../statics/img/nav.png';

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solod #ccc;
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 58px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  background: url(${LogoPic});
  background-size: contain;
`;

export const NavWrapper = styled.div`
  position: relative;
  float: left;
  .search {
    width: 28px;
    line-height: 28px;
    border-radius: 14px;
    position: absolute;
    right: 5px;
    color: #333;
    top: 14px;
    font-size: 16px;
    text-align: center;
    &.focus {
      background: #777;
      color: #fff;
    }
  }
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '请搜索',
})`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 19px;
  background: #eee;
  transition: all 0.2s;
  &::placeholder {
    color: #999;
  }
  &.focus {
    width: 240px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  &.write {
    background-color: #ea6f5a;
    color: #fff;
  }
  &.reg {
    color: #ea6f5a;
    background-color: transparent;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
  .searchInfoTitle {
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    .searchInfoSwitch {
      float: right;
      font-size: 13px;
      cursor: pointer;
      .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
      }
    }
  }
  .searchInfoList {
    overflow: hidden;
    .searchInfoItem {
      display: block;
      float: left;
      line-height: 20px;
      padding: 0 5px;
      margin-right: 10px;
      margin-bottom: 15px;
      font-size: 12px;
      border: 1px solid #ddd;
      color: #787878;
      border-radius: 3px;
    }
  }
`