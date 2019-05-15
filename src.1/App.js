import React from 'react';

import { Button, List } from 'antd';

// import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    const boss = '李云龙';
    return (
      <div>
        <h2> 独立团团长: {boss} </h2>
        <YiYing yingzhang="张大彪" />
        <QiBingLian lianzhang="孙德胜" />
      </div>
    );
  }
}

class YiYing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solders: ['虎子', '柱子', '王根生']
    };
    // this.addSolder = this.addSolder.bind(this);
  }

  /**
   * addSolder (){} onClick={this.addSolder} 时，this = undefined
   * 三种解决方式
   * 1. 在constructor中bind 如：this.addSolder = this.addSolder.bind(this); 目前有报错 Bind must be called on a function  尚未解决
   * 2. 使用箭头函数 onClick={() => this.addSolder()} 最常用的是这种方式
   * 3. addSolder = ()=>{}
   */
  addSolder() {
    console.log('addSolder', this);
    this.setState({
      solders: [...this.state.solders, '新兵蛋子' + Math.random()]
    });
  }
  componentWillMount() {
    console.log('组件马上就要加载了');
  }
  componentDidMount() {
    console.log('组件加载完毕');
  }
  render() {
    console.log('组件正在加载');
    return (
      <div>
        <h3>一营营长: {this.props.yingzhang}</h3>
        <Button type="primary" onClick={() => this.addSolder()}>
          新兵入伍
        </Button>
        <List
          dataSource={this.state.solders}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        {/* <ul>
          {this.state.solders.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

function QiBingLian(props) {
  return <h3>骑兵连连长: {props.lianzhang}</h3>;
}

export default App;
