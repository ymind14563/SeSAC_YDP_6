import React, { Component } from 'react'

export default class HandlerEx3 extends Component {

  constructor(props) {
    super(props);
    this.state = { msg : '안녕하세요', hidden: false }
    this.hideText = this.hideText.bind(this);
  }

  hideText() {
    this.setState({ hidden: !this.state.hidden})
  }

  render() {
    return (
      <div>
        <h1>Event Handling 3</h1>
        <button onClick={this.hideText}>
            {this.state.hidden ? '보여라' : '사라져라'}
        </button>
        {!this.state.hidden && <h2>{this.state.msg}</h2>}
      </div>
    )
  }
}
