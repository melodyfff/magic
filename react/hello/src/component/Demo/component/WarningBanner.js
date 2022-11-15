import React, { Component } from "react";
import "./WarningBanner.css";

function Warning(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">警告!</div>;
}

export default class WarningBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <Warning warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "隐藏" : "显示"}
        </button>
      </div>
    );
  }
}
