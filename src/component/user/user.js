import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Result, List, WhiteSpace, Modal } from 'antd-mobile';
import browserCookie from 'browser-cookies';
import { logoutSubmit } from '../../redux/user.redux';

@connect(
  state => state.user,
  { logoutSubmit }
)
class User extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    const alert = Modal.alert;
    alert('注销', '确认退出吗???', [
      { text: 'Candel', onPress: () => console.log('cancel') },
      {
        text: 'Ok',
        onPress: () => {
          console.log('ok');
          browserCookie.erase('userid'); // clear cookie
          this.props.logoutSubmit();
        }
      }
    ]);
  }
  render() {
    const props = this.props;
    console.log('props=', props);
    return props.user ? (
      <div>
        <Result
          img={
            <img
              src={require(`../img/${this.props.avatar}.png`)}
              style={{ width: 50 }}
              alt=""
            />
          }
          title={this.props.user}
          message={props.type === 'boss' ? props.company : null}
        />
        <List renderHeader={() => '简介'}>
          <List.Item multipleLine>
            {props.title}
            {this.props.desc.split('\n').map(v => (
              <List.Item.Brief key={v}>{v}</List.Item.Brief>
            ))}
            {props.money ? (
              <List.Item.Brief>薪资:{props.money}</List.Item.Brief>
            ) : null}
          </List.Item>
        </List>
        <WhiteSpace />
        <List>
          <List.Item style={{ zIndex: 1 }} onClick={this.logout}>
            退出登录
          </List.Item>
        </List>
      </div>
    ) : (
      <Redirect to={props.redirectTo} />
    );
  }
}

export default User;
