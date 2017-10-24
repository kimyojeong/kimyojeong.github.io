import React, { Component } from 'react';
import SocialModules from './SocialModules';

class Profile extends Component {
  render() {
    return (
        <div className="post-profile">
          <div className="post-profile-thumb">
            <img src={ this.props.author.thumbnail } alt={ this.props.author.name } />
          </div>
      
          <div className="post-profile-desc">
            <a href="/about"><strong>{ this.props.author.name }</strong></a>
            <br />
            { this.props.author.description }
            <br />
            <SocialModules
                baseUrl={ this.props.baseUrl }
                rss={ this.props.author.rss }
                twitter={ this.props.author.twitter }
                facebook={ this.props.author.facebook }
                github={ this.props.author.github }
                email={ this.props.author.email } />
          </div>
        </div>
    );
  }
}

export default Profile;