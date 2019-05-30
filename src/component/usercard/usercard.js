import React from 'react';
import PropsTypes from 'prop-types';

import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

class UserCard extends React.Component {
  static propTypes = {
    userlist: PropsTypes.array.isRequired
  };

  render() {
    const Header = Card.Header;
    const Body = Card.Body;

    console.log('this.props=', this.props);
    console.log('this.props.userlist=', this.props.userlist);
    return (
      <WingBlank>
        {/* {this.state.data.map(v => */}
        {this.props.userlist.map(v =>
          v.avatar ? (
            <section key={v._id}>
              <WhiteSpace />
              <Card >
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
