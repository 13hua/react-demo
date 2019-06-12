import React from 'react';

export class Chat extends React.Component {
  render() {
    console.log('chat props ', this.props);
    return (
      <div>
        <h2>chat with user:{this.props.match.params.user}</h2>
        {/* <h2>chat with user:</h2> */}
      </div>
    );
  }
}

export default Chat;
