import React, { Component } from 'react';

class SocialModules extends Component {
  render() {
    return (
      <div>
        <Rss feed={ this.props.rss } baseUrl={ this.props.baseUrl } />
        <Twitter username={ this.props.twitter } baseUrl={ this.props.baseUrl } />
        <Facebook username={ this.props.facebook } baseUrl={ this.props.baseUrl } />
        <Github username={ this.props.github } baseUrl={ this.props.baseUrl } />
        <Email username={ this.props.email } baseUrl={ this.props.baseUrl } />
      </div>
    );
  }
}

function Rss(props){
  return props.feed ?
  <a href={ props.feed }><span className="icon icon--rss"><img src={ props.baseUrl + "/assets/images/icon-rss.svg" } /></span></a>
  : null;
}
function Twitter(props){
  return props.username ?
  <a href={ "https://twitter.com/" + props.username }><span className="icon icon--twitter"><img src={ props.baseUrl + "/assets/images/icon-twitter.svg" } /></span></a>
  : null;
}
function Facebook(props){
  return props.username ?
  <a href={ "https://facebook.com/" + props.username }><span className="icon icon--facebook"><img src={ props.baseUrl + "/assets/images/icon-facebook.svg" } /></span></a>
  : null;
}
function Github(props){
  return props.username ?
  <a href={ "https://github.com/" + props.username }><span className="icon icon--github"><img src={ props.baseUrl + "/assets/images/icon-github.svg" } /></span></a>
  : null;
}
function Email(props){
  return props.username ?
  <a href={ "mailto:" + props.username }><span className="icon icon--email"><img src={ props.baseUrl + "/assets/images/icon-email.svg" } /></span></a>
  : null;
}

export default SocialModules;