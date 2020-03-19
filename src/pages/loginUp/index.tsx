import React , { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import Toast from '../../common/toast';
import request from '@/resource/index';

interface Login {
  (account: number | string, passworld: number | string) : void
}
interface LoginUpProps {
  history: any
}


interface LoginUpState {
  account: string | number
  password: string
  emailAddress: string
}
class LoginUp extends Component<LoginUpProps, LoginUpState> {
  constructor(props:LoginUpProps){
    super(props);
    this.state = {
      account: '',
      password: '',
      emailAddress: '',
    }; 
    this.handelChange = this.handelChange.bind(this);       
  }
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' type='text' onChange={(e) => this.handelChange(e, 'account')}/>
          <Input placeholder='密码' type='password' onChange={(e) => this.handelChange(e, 'password')}/>
          <Input placeholder='邮箱' type='email' onChange={(e) => this.handelChange(e, 'emailAddress')}/>
          <Button onClick={this.loginUp.bind(this)}>注册</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
  loginUp() {
    const { account, password, emailAddress } = this.state;
    console.log(account, password, emailAddress);
    let text ='';
    if (!account) text = '请输入账号';
    if (!password) text = '请输入密码';
    if (!emailAddress) text = '请输入邮箱';
    if (text) {
      Toast.info(text);
      return;
    }
    request.post('/users/loginUp', { account, password, emailAddress }).then((res) => {
      if (res.successFlag !== 'Y') {
        Toast.info(res.msg);
      } else {
        Toast.info('登陆成功，即将跳转至登陆页...');
        setTimeout(() => {
          this.props.history.push('/loginIn');
        }, 2000)
      }
    })
  }
  handelChange(e, key){
    console.log(key);
    const obj = {};
    obj[key] = e.target.value;
    this.setState(obj);
  }
}

export default LoginUp;