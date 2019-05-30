import React from 'react';
import { Redirect } from 'react-router-dom';
import { List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';

import Logo from '../../component/logo/logo';
import { login } from '../../redux/user.redux';
import imoocForm from '../../component/imooc-form/imooc-form';
// // 简单的高阶组建
// function hello() {
//   console.log('hello imooc I love React');
// }

// function WrapperHello(fn) {
//   return function() {
//     console.log('before say hello');
//     fn();
//     console.log('after say hello');
//   };
// }

// hello = WrapperHello(hello);
// hello();

// function WrapperHello(Comp) {
//   //属性代理
//   // class WrapComp extends React.Component {
//   //   render() {
//   //     return (
//   //       <div>
//   //         <p>这是HOC高阶组件特有的元素</p>
//   //         <Comp {...this.props} />
//   //       </div>
//   //     );
//   //   }
//   // }
//   //反向继承
//   class WrapComp extends Comp {
//     componentDidMount() {
//       console.log('高阶组件新增的生命周期,加载完成');
//     }
//     render() {
//       return <Comp />;
//     }
//   }
//   return WrapComp;
// }

// @WrapperHello
// class Hello extends React.Component {
//   componentDidMount() {
//     console.log('Hello加载完成');
//   }
//   render() {
//     return <h2>hello imooc I love React&Redux</h2>;
//   }
// }

@connect(
  state => state.user,
  { login }
)
@imoocForm
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
  handleLogin() {
    console.log(this.props);
    this.props.login(this.props.state);
  }

  render() {
    return (
      <div>
        {/* <Hello /> */}
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        <Logo />
        <List>
          <WhiteSpace />
          <InputItem
            onChange={v => this.props.handleChange('user', v)}
            placeholder="imooc"
          >
            用户
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.props.handleChange('pwd', v)}
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
