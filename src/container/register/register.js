import React from 'react';
import {
  List,
  InputItem,
  Button,
  Radio,
  WhiteSpace,
  WingBlank
} from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { regisger } from '../../redux/user.redux';
import Logo from '../../component/logo/logo';

@connect(
  state => state.user,
  { regisger }
)
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius' // 或者boss
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  handleRegister() {
    this.props.regisger(this.state);
    console.log(this.state);
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <List>
          {this.props.msg ? (
            <p className="error-msg">{this.props.msg}</p>
          ) : null}
          <WhiteSpace />
          <InputItem onChange={v => this.handleChange('user', v)}>
            用户名
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.handleChange('pwd', v)}
          >
            密码
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.handleChange('repeatpwd', v)}
          >
            确认密码
          </InputItem>

          <WingBlank>
            <RadioItem
              checked={this.state.type === 'genius'}
              onChange={() => this.handleChange('type', 'genius')}
            >
              牛人
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              checked={this.state.type === 'boss'}
              onChange={() => this.handleChange('type', 'boss')}
            >
              Boss
            </RadioItem>
            <WhiteSpace />
            <Button type="primary" onClick={this.handleRegister}>
              注册
            </Button>
          </WingBlank>
        </List>
      </div>
    );
  }
}

export default Register;
