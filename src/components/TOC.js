import React, { Component } from "react";
import '../App.css';

class TOC extends Component {
    render() {
        console.log('TOC render');
        const lists = [];
        const data = this.props.data;
        data.forEach(e => {
            lists.push(<li key={e.id}><a href={"/content/"+e.id}>{e.title}</a></li>)
        });
      return (
        <nav>
          {lists}
        </nav>
      )
    }
}

export default TOC;
// TOC class를 가져다 쓸 수 있게됨