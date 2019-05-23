import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

import { getUserList } from '../../redux/chatuser.redux';

@connect(
  state => state.chatuser,
  { getUserList }
)
class Boss extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: []
    // };
  }

  componentDidMount() {
    this.props.getUserList('genius');
    // axios.get('/user/list?type=genius').then(res => {
    //   if (res.data.code === 0) {
    //     this.setState({ data: res.data.data });
    //   }
    // });
  }

  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        <WhiteSpace />
        {/* {this.state.data.map(v => */}
        {this.props.userlist.map(v =>
          v.avatar ? (
            <Card key={v._id}>
              <Header
                titile={v.user}
                thumb={require(`../img/${v.avatar}.png`)}
                extra={<span>{v.title}</span>}
              />
              <Body>
                {v.desc.split('\n').map(v => (
                  <p key={v}>{v}</p>
                ))}
              </Body>
            </Card>
          ) : null
        )}
      </WingBlank>
    );
  }
}
export default Boss;
