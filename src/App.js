import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

// component는 자바스크립트가 아님 >> JSX
class App extends Component {
  constructor(props){
    //render보다 먼저 실행
    //component 초기화용으로 사용
    //외부에서 알 필요 없는 정보(내부적으로 사용)
    super(props);
    //상위 컴포넌트(app)의 정보(state)를 하위 컴포넌트(subject)로(props) 전달할 수 있음
    //state 값이 변경되면, 해당 state를 가진 컴포넌트(app)의 render 함수가 다시 호출됨 >> 화면이 다시 그려짐 
    this.state = {
      mode:'welcome',
      subject: {title: "WEB", desc: "World Wide Web!"},
      welcome: {title: "React", desc: "Hello, React!"},
      contents: [
        {id:1, title:'HTML', desc: 'HTML...'},
        {id:2, title:'cs22s', desc: 'css...'},
        {id:3, title:'javascript', desc: 'javascript...'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    // props 전달
    return (
      <div className="App">
        <Subject 
          title={_title} 
          sub={_desc}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" discription="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
