import React, { Component } from 'react'

export default class SelectFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'gg'};
     
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
     
      handleChange(event) {
        this.setState({value: event.target.value});
      }
     
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
        
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          选择您最喜欢的网站
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="gg">Google</option>
            <option value="rn">Runoob</option>
            <option value="tb">Taobao</option>
            <option value="fb">Facebook</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}
