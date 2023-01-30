import React, { Component } from "react";
import '../App.css';

class Content extends Component {
  render(){
    console.log('Content render');
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.discription}
      </article>
    )
  }
}

export default Content;