import React, { Component } from "react";
import '../App.css';

class Subject extends Component {
  render() {
    console.log('Subject render');
    return (
      <header>
        <h1><a href="/">{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    )
  }
}

export default Subject;