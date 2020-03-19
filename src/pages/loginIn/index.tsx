import React , { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store/index';

// interface Login {
//   (account: number | string, passworld: number | string) : void
// }
interface Props {
  loginStatus: boolean
  login: (account: number | string, passworld: number | string) => void
}
class LoginIn extends Component<Props> {
  account!: string | number
  password!: string
  render() {
    const { loginStatus } = this.props;
    console.log('loginStatus', loginStatus);
    if (loginStatus) {
      return <Redirect to='/'></Redirect>
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' type='text' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
            <span>忘记密码</span>
            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => {
  return {
    login(account: any, password : any): void {
      dispatch(actionCreators.loginIn({
        account: account.value,
        password: password.value,
      }))
      // dispatch({
      //   type: 'login',
      //   login: true,
      // });
    }
  }
}
export default connect(mapState, mapDispatch)(LoginIn);