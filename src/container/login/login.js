import React from 'react';
import Logo from '../../component/logo/logo';
import {
  List,
  InputItem,
  Button,
  // Radio,
  WhiteSpace,
  WingBlank
} from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';

@connect(
  state => state.user,
  { login }
)
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    };
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  register() {
    console.log(this.props);
    this.props.history.push('/register');
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  handleLogin() {
    console.log(this.props);
    this.props.login(this.state);
  }

  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <List>
          <WhiteSpace />
          <InputItem
            onChange={v => this.handleChange('user', v)}
            placeholder="imooc"
          >
            用户
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.handleChange('pwd', v)}
            placeholder="123"
          >
            密码
          </InputItem>
          <WhiteSpace />
        </List>

        {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
        <WingBlank>
          <Button onClick={this.handleLogin} type="primary">
            登录
          </Button>
          <WhiteSpace />
          <Button onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
