import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';

// 装饰器写法
// const mapStatetoProps = state => {
//   return { num: state };
// };
// const actionCreators = { addGun, removeGun, addGunAsync };

@connect(
  // 你要state什么属性放到props里
  state => ({ num: state.counter }),
  // 你要什么方法，放到props里，自动dispatch
  { addGun, removeGun, addGunAsync }
)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1> 现在有机关枪 {this.props.num}把 </h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
      </div>
    );
  }
}

// const mapStatetoProps = state => {
//   return { num: state };
// };
// const actionCreators = { addGun, removeGun, addGunAsync };

// App = connect(
//   mapStatetoProps,
//   actionCreators
// )(App);

export default App;
