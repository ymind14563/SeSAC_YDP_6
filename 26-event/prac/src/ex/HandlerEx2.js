import React, { Component } from 'react'

export default class HandlerEx2 extends Component {
    constructor(props) {
        super(props);
        this.state = { msg : '검정색 글씨' }
        this.chgColor = this.chgColor.bind(this);
    }

    chgColor(e) {
        if(e.target.textContent === '파란색') {
            this.setState({ msg : '파란색 글씨', color : 'blue' });
        } else {
            this.setState({ msg : '빨간색 글씨', color : 'red' });
            
        }
    }

  render() {
    return (
      <div>
        <h1>Event Handling 2</h1>
        <h1 style={{ color : this.state.color }}>{this.state.msg}</h1>
        <button onClick={this.chgColor}>빨간색</button>
        <button onClick={this.chgColor}>파란색</button>
        
      </div>
    )
  }
}

