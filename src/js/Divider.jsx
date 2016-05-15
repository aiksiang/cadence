'use strict';

import React, {Component} from 'react';

export default class Divider extends Component {
  render() {
    return (
      <div>
        <h2 className="ui center aligned icon header">
          {this.props.name}
        </h2>
        <div className="ui horizontal divider">
          <i className={`${this.props.icon} icon`}></i>
        </div>
      </div>
    );
  }
}
