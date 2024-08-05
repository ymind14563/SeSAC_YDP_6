import React, { Component } from 'react'

export default class HandlerEx extends Component {
  constructor(props) {
    super(props);
    this.state = { msg : '눌러보세요!'}
    this.chgMsg = this.chgMsg.bind(this);
  }

  chgMsg() {
    this.setState((e) => ({ 
      msg : e.msg === 'Hello World!' ? 'Goodbye World!' : 'Hello World!' }))
  }
  render() {
    return (
      <div>
        <h1>Event Handling 1</h1>
        <h2>{this.state.msg}</h2>

        <button onClick={this.chgMsg}>클릭</button>
        
      </div>
    )
  }
}
