import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';
import Profile from './components/Profile';
import '../_sass/clean-blog.scss';

class App extends Component {
  render() {
    return (
      <Hello />
    )
  }
}

if (document.getElementById('root') != null){
  render(<App />, document.getElementById('root'));
}

var profileEl = document.getElementById('profile');
if (profileEl != null){
  var profileProps = JSON.parse(profileEl.getAttribute('data-json').replace(/\'/gi, '\"'));
  render(<Profile author={ profileProps.author } baseUrl={ profileProps.baseUrl } />, profileEl);
}
