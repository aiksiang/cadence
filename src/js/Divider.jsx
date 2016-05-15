'use strict';

import React, {Component} from 'react';

export default class Divider extends Component {
  render() {
    return (
      <div>
        <h2 className="ui center aligned icon header">
          {this.props.name}
        </h2>
        {this.props.description ?
          <div className="divider centered">
            {this.props.description}
          </div>
          :null
        }
        {this.props.disclaimer ?
          <div className="divider centered disclaimer">
            {this.props.disclaimer}
          </div>
          :null
        }
        <div className="ui horizontal divider">
          <i className={`${this.props.icon} icon`}></i>
        </div>
      </div>
    );
  }
}
