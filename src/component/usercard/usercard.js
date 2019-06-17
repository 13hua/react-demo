import React from 'react';
import PropsTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

@withRouter
class UserCard extends React.Component {
  static propTypes = {
    userlist: PropsTypes.array.isRequired
  };

  handleClick(v) {
    this.props.history.push(`/chat/${v._id}`);
  }

  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <WingBlank>
        {/* {this.state.data.map(v => */}
        {this.props.userlist.map(v =>
          v.avatar ? (
            <section key={v._id}>
              <WhiteSpace />
              <Card style={{ zIndex: 1 }} onClick={() => this.handleClick(v)}>
                <Header
                  titile={v.user}
                  thumb={require(`../img/${v.avatar}.png`)}
                  extra={<span>{v.title}</span>}
                />
                <Body>
                  {v.type === 'boss' ? <p>公司:{v.company}</p> : null}
                  {v.desc.split('\n').map(d => (
                    <p key={d}>{d}</p>
                  ))}
                  {v.type === 'boss' ? <p>薪资:{v.money}</p> : null}
                </Body>
              </Card>
            </section>
          ) : null
        )}
        <WhiteSpace />
      </WingBlank>
    );
  }
}

export default UserCard;
