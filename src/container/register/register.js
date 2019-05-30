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
import imoocForm from '../../component/imooc-form/imooc-form';

@connect(
  state => state.user,
  { regisger }
)
@imoocForm
class Register extends React.Component {
  constructor(props) {
    super(props);

    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    this.props.handleChange('type', 'genius');
  }

  handleRegister() {
    this.props.regisger(this.props.state);
    console.log(this.props.state);
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
          <InputItem onChange={v => this.props.handleChange('user', v)}>
            用户名
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.props.handleChange('pwd', v)}
          >
            密码
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.props.handleChange('repeatpwd', v)}
          >
            确认密码
          </InputItem>

          <WingBlank>
            <RadioItem
              checked={this.props.state.type === 'genius'}
              onChange={() => this.props.handleChange('type', 'genius')}
            >
              牛人
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              checked={this.props.state.type === 'boss'}
              onChange={() => this.props.handleChange('type', 'boss')}
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
