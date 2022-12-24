import React, { Component } from 'react'

export default class HelloMessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }    

  render() {
    var value = this.state.value;
    return <div>
            <h1>改变state的值</h1>
            <input type="text" value={value} onChange={this.handleChange} /> 
            <h4>this.state.value = {value}</h4>
           </div>;
  }
}
